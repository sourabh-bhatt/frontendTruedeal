export interface VisaEnquiryData {
    name: string;
    email: string;
    phone: string;
    country: string;
    purpose: string;
    startDate: string;
    endDate: string;
    travellers: number;
    note?: string;
    documents: {
        [key: string]: {
            name: string;
            base64?: string;
        };
    };
}

export function generateVisaEmailHTML(enquiryData: VisaEnquiryData) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Visa Enquiry</title>
            <style>
                /* ... (keeping same styles as before) ... */
                .document-list {
                    margin-top: 20px;
                    padding: 15px;
                    background: #f8f9fa;
                    border-radius: 8px;
                }
                .document-item {
                    padding: 10px;
                    margin: 5px 0;
                    background: white;
                    border-radius: 4px;
                    border: 1px solid #eee;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>New Visa Application Enquiry</h1>
                </div>
                <div class="content">
                    <p class="intro">A new visa application enquiry has been received.</p>
                    <table class="info-table">
                        <tr class="info-row">
                            <td class="info-label">Country</td>
                            <td class="info-value">${enquiryData.country}</td>
                        </tr>
                        <tr class="info-row">
                            <td class="info-label">Purpose</td>
                            <td class="info-value">${enquiryData.purpose}</td>
                        </tr>
                        <tr class="info-row">
                            <td class="info-label">Travel Dates</td>
                            <td class="info-value">${enquiryData.startDate} to ${enquiryData.endDate}</td>
                        </tr>
                        <tr class="info-row">
                            <td class="info-label">Travelers</td>
                            <td class="info-value">${enquiryData.travellers}</td>
                        </tr>
                        <tr class="info-row">
                            <td class="info-label">Name</td>
                            <td class="info-value">${enquiryData.name}</td>
                        </tr>
                        <tr class="info-row">
                            <td class="info-label">Email</td>
                            <td class="info-value">${enquiryData.email}</td>
                        </tr>
                        <tr class="info-row">
                            <td class="info-label">Phone</td>
                            <td class="info-value">${enquiryData.phone}</td>
                        </tr>
                        ${enquiryData.note ? `
                        <tr class="info-row">
                            <td class="info-label">Additional Note</td>
                            <td class="info-value">${enquiryData.note}</td>
                        </tr>
                        ` : ''}
                    </table>

                    <div class="document-list">
                        <h3>Uploaded Documents</h3>
                        ${Object.entries(enquiryData.documents)
            .map(([key, doc]) => `
                                <div class="document-item">
                                    <strong>${key}:</strong> ${doc.name}
                                </div>
                            `).join('')}
                    </div>
                </div>
                <div class="footer">
                    <p>You can reply directly to this email to respond to the applicant.</p>
                    <p>&copy; 2024 Truedeal Travel. All rights reserved.</p>
                </div>
            </div>
        </body>
        </html>
    `;
} 