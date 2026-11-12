# Meydan FZ Employee Knowledge Hub

A static, searchable employee reference website built from the supplied `Meydan KC.zip`.

## Included content
- 36 original PDF reference documents
- 6 knowledge areas
- Search and category filters
- Open and download links for every supplied PDF
- Responsive layout for desktop and mobile

## Run locally
Open `index.html` in a browser. For best results, serve the folder with a static web server.

## Publish as a new GitHub repository
1. Create a new GitHub repository named `meydan-employee-knowledge-hub`.
2. Upload the contents of this folder to the repository root (not the enclosing folder).
3. In Settings → Pages, select **GitHub Actions** as the source.
4. The included workflow deploys the site on pushes to `main`.

## Source file handling
The original PDFs are preserved under `documents/`, grouped by the folder structure in the supplied ZIP:
- Email templates
- FAQ and Queries
- Visa
- Visa Allocation
- Immigration Card
- Company formation

## Important
The site organises the supplied reference material; it does not independently verify that fees, timelines, legal requirements, authority instructions or internal email routing are current. Confirm these with the authorised process owner before operational use. Do not add client-specific KYC documents, passport copies, credentials or confidential case records to a public repository.
