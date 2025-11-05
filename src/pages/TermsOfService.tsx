import ReactMarkdown from 'react-markdown'

const termsContent = `# Niel Academy Terms of Use
**Effective Date:** Monday October 20, 2025  
**Last Updated:** Monday October 20, 2025

## 1. Introduction
Welcome to Niel Academy. These Terms of Use govern your access to and use of the Niel Academy mobile application and related services (the "App"). By using the App, you agree to be bound by these Terms. If you do not agree, you must stop using the App.

## 2. Operator Information
Niel Academy is operated as a sole proprietorship owned by:

**Neba-Akongnwi Othniel Che**  
Buea, Cameroon  

**Contact:**  
cheothniel@gmail.com  
cheothniel@nielacademy.com  
support@nielacademy.com

## 3. Eligibility
You must be at least **13 years old** to use the App. By using the App, you confirm that you meet this age requirement.

## 4. User Accounts
The App supports Google sign-in and email-based account creation. Users are responsible for maintaining the confidentiality of their login credentials and for all activities that occur under their account.

### 4.1 Account Deletion
Users may request account deletion by emailing **support@nielacademy.com**. Once processed, all associated data will be permanently removed according to our Privacy Policy.

## 5. Acceptable Use
Users must use the App in compliance with applicable laws and platform rules. The following actions are strictly prohibited:

- Misuse of the AI assistant, including generating harmful, abusive, or misleading content  
- Redistribution of App content outside the platform without permission  
- Any illegal activity  
- Hacking, tampering with, or attempting to bypass App security  
- Sharing copyrighted exam materials outside the App  
- Uploading or sharing harmful, malicious, or inappropriate content  

Violations may result in suspension or termination of your account.

## 6. Intellectual Property
All content within the App, including design, software, features, explanations, and AI-generated responses, is the intellectual property of Niel Academy unless stated otherwise.

Past examination questions and publicly available documents remain the property of their respective copyright holders. Niel Academy provides them solely for educational use within the App.

Users may not copy, reproduce, or distribute any App content or AI explanations without written permission.

## 7. Payments and Subscriptions
Certain features require a one-time payment or subscription purchase.

- Subscriptions and paid features are **not auto-renewing**  
- **No refunds** are provided for any payment or subscription  
- Payments are processed through **MTN Mobile Money** and **Orange Money**  
- If a payment fails, no feature is activated and no further action is taken  

## 8. AI Features and Limitations
The App provides an AI assistant to support learning and explanation. However:

- AI responses may be inaccurate, incomplete, or unsuitable for specific contexts  
- Users should verify information when necessary  
- AI output should not be treated as absolute truth  
- Users agree not to misuse or exploit AI features  

Niel Academy is not liable for outcomes resulting from reliance on AI-generated content.

## 9. Availability of Service
Niel Academy may modify, update, or discontinue features or services at any time without prior notice.  
User accounts may be suspended if misuse, abuse, or security risks are detected.

## 10. Liability Disclaimer
Niel Academy is provided on an "as is" and "as available" basis. To the fullest extent permitted by law, Niel Academy disclaims all warranties, express or implied.

Niel Academy is not liable for:

- Service interruptions or downtime  
- Loss of data  
- Inaccurate AI responses  
- Device damage or operational issues  
- Indirect or consequential damages arising from use of the App  

Users assume full responsibility for their use of the App.

## 11. Dispute Resolution
All concerns or disputes must first be addressed through email communication with **support@nielacademy.com**.  
Parties agree to attempt resolution through dialogue before taking further action.

## 12. Governing Law
These Terms are governed by the laws of the Republic of Cameroon.

## 13. Termination
Niel Academy may suspend or terminate accounts that violate these Terms or pose security or misuse risks.  
Users may terminate their use of the App at any time by uninstalling the App and requesting account deletion.

## 14. Changes to These Terms
These Terms may be updated periodically to reflect changes in service or legal requirements.  
The latest version will always be available at **nielacademy.com**.  
Continued use of the App after updates indicates acceptance of the revised Terms.`

function TermsOfService() {
  return (
    <div className="flex-1 w-full h-full">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="text-4xl font-bold text-neutral-900 mb-6 font-roboto-bold">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4 mt-8 font-roboto-semibold">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-6 font-roboto-semibold">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-neutral-700 text-lg leading-relaxed mb-4 font-serif font-light">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="text-neutral-700 text-lg leading-relaxed mb-4 font-serif font-light list-disc pl-6">
                  {children}
                </ul>
              ),
              li: ({ children }) => (
                <li className="mb-2 font-serif font-light">
                  {children}
                </li>
              ),
              strong: ({ children }) => (
                <strong className="font-semibold text-neutral-900 font-roboto-semibold">
                  {children}
                </strong>
              ),
              hr: () => (
                <hr className="border-neutral-300 my-8" />
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-brand-primary pl-4 italic text-neutral-600 font-serif font-light">
                  {children}
                </blockquote>
              )
            }}
          >
            {termsContent}
          </ReactMarkdown>
        </div>
      </section>
    </div>
  )
}

export default TermsOfService

