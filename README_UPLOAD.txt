PIXOLLIE.GITHUB.IO - V5 CUSTOM DOMAIN

Recommended public URL:
https://pixollie.com/

I recommend using the root domain rather than /signup because this page already functions as the PixOllie homepage:
- it introduces you
- showcases Chuck Lite
- collects the email signup
- links to paid packs

The post-confirmation download page becomes:
https://pixollie.com/download/

UPLOAD
Replace the current repo contents with the CONTENTS of this folder.
Keep CNAME in the repository root.

GITHUB PAGES
In pixollie/pixollie.github.io:
Settings -> Pages -> Custom domain
Enter:
pixollie.com

GitHub may create/update the CNAME file itself. This package already includes it.

DNS
For the apex domain pixollie.com, point the domain to GitHub Pages using your DNS provider.
GitHub currently documents these A records for host @:
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153

Recommended www record:
Type: CNAME
Host/name: www
Target/value: pixollie.github.io

Do not remove the Brevo records you just added for mail.pixollie.com, DKIM, DMARC, or domain verification.
Those can coexist with the GitHub Pages records.

BREVO
Update the existing PixOllie Freebie form's post-validation confirmation URL from:
https://pixollie.github.io/download/

to:
https://pixollie.com/download/

You do not need a new Brevo form or new embed code.

Once GitHub reports the custom domain is configured, enable Enforce HTTPS when available.
DNS/HTTPS propagation can take some time.
