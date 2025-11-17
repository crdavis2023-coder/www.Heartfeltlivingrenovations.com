# API Routes Instructions

These instructions apply when working on files in `pages/api/`.

## API Route Standards

### Request Handling
- Always validate the HTTP method first (e.g., only accept POST for form submissions).
- Return appropriate status codes:
  - `200` for success
  - `400` for client errors (invalid input, missing fields)
  - `405` for method not allowed
  - `500` for server errors
- Always return JSON responses with a consistent structure:
  ```javascript
  // Success
  { success: true, message: "..." }
  
  // Error
  { success: false, error: "..." }
  ```

### Input Validation
- Validate all required fields before processing.
- Sanitize user input before using it in emails or database operations.
- Provide clear, user-friendly error messages for validation failures.
- Example validation pattern:
  ```javascript
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      error: 'Please provide all required fields: name, email, and message' 
    });
  }
  ```

### Environment Variables
- **Never hardcode** sensitive values like API keys or email addresses.
- Use environment variables from `.env.local` (development) or Vercel settings (production).
- Required environment variables for email API routes:
  - `SENDGRID_API_KEY` – SendGrid API key for sending emails
  - `EMAIL_TO` – Recipient email address
  - `EMAIL_FROM` – Sender email address (must be verified in SendGrid)
- Always check that required environment variables are present:
  ```javascript
  if (!process.env.SENDGRID_API_KEY) {
    return res.status(500).json({ 
      success: false, 
      error: 'Server configuration error' 
    });
  }
  ```

### Error Handling
- Wrap external API calls (like SendGrid) in try-catch blocks.
- Log errors to the console for debugging, but don't expose sensitive details to the client.
- Return generic error messages to users while logging specific errors server-side:
  ```javascript
  try {
    await sgMail.send(msg);
    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('SendGrid error:', error.response?.body || error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to send message. Please try again later.' 
    });
  }
  ```

### SendGrid Integration
- Use the `@sendgrid/mail` package (already installed).
- Set the API key once: `sgMail.setApiKey(process.env.SENDGRID_API_KEY)`
- Structure email messages clearly:
  ```javascript
  const msg = {
    to: process.env.EMAIL_TO,
    from: process.env.EMAIL_FROM,
    subject: 'Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong> ${message}</p>`
  };
  ```
- Ensure `EMAIL_FROM` is verified in SendGrid to avoid delivery failures.

### Testing API Routes
Before considering work complete:
1. Test the happy path (valid input → successful email).
2. Test validation (missing fields → 400 error with clear message).
3. Test method validation (GET request → 405 error).
4. Test with invalid SendGrid credentials (should return 500 with user-friendly message).
5. Verify no sensitive information leaks in error responses.

### Common Pitfalls to Avoid
- Don't expose stack traces or detailed error messages to the client.
- Don't hardcode email addresses or API keys.
- Don't skip input validation.
- Don't forget to set correct status codes.
- Don't allow GET requests to mutate data.
- Don't trust client-side validation alone—always validate server-side.

### Consistency with Frontend
- Ensure the expected request body structure matches what forms send.
- If forms send `{ name, email, message, phone }`, the API should expect those exact field names.
- Keep error message keys consistent (e.g., always use `error` not `message` for errors).
