import smtplib, ssl, getpass
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def send_mail(sender, recipient, message):
    ssl_port = 465 # SSL
    smtp_server = "smtp.gmail.com"

    # Login input
    print("\nPlease type in your email and password and press enter:")
    sender_email = input("E-mail: ")
    password = getpass.getpass(prompt = "Password: ", stream=None)

    # Recipient and message 
    print("--------------------------------")
    recipient_email = input("Recipient e-mail: ")
    print("--------------------------------")


    message = MIMEMultipart("alternative")
    message["Subject"] = ""
    message["From"] = sender_email
    message["To"] = recipient_email

    text = []
    print("Enter/Paste your content. Ctrl-D or Ctrl-Z ( windows ) to save it.")
    while True:
        try:
            line = input()
        except EOFError:
            break
        text.append(line)

    # Turn these into plain/html MIMEText objects
    content = MIMEText(text, _subtype="plain", _charset="utf-8")

    # Add HTML/plain-text plainparts to MIMEMultipart message
    # The email client will try to render the last part first
    message.attach(content)

    # Create a TLS-encrypted connection
    context = ssl.create_default_context()

    with smtplib.SMTP_SSL(smtp_server, ssl_port, context=context) as server:
        server.login(sender_email, password)
        server.sendmail(sender_email, recipient_email, message.as_string())

        print("Success!")
