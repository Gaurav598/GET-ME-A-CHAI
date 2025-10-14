# Get Me a Chai

![Get Me a Chai](./public/tea.gif)

Welcome to "Get Me a Chai," a full-stack crowdfunding platform built with Next.js, allowing creators to receive financial support from their fans. It's a space where your followers can "buy you a chai" to fund your projects and passions.

## Features

-   **Full-Stack Application**: Built with Next.js App Router for both frontend and backend functionality.
-   **Authentication**: Secure user authentication using NextAuth.js, with support for multiple OAuth providers like GitHub and Google.
-   **Payment Integration**: Integrated with Razorpay to seamlessly handle payments from supporters to creators.
-   **Creator Dashboards**: Logged-in users get a personal dashboard to manage their profile details, including their name, username, profile picture, cover photo, and Razorpay credentials.
-   **Public Creator Pages**: Every creator gets a unique, shareable public page (`/[username]`) where fans can view their profile and make donations/page.js].
-   **Supporters Leaderboard**: Creator pages feature a leaderboard showcasing the top supporters, their messages, and the amount they've donated.
-   **Database Integration**: Uses MongoDB with Mongoose for robust data storage and management of users and payments.

## Tech Stack

-   **Framework**: [Next.js](https://nextjs.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Authentication**: [NextAuth.js](https://next-auth.js.org/)
-   **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
-   **Payment Gateway**: [Razorpay](https://razorpay.com/)

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

-   Node.js (v18.17.0 or later)
-   npm or yarn
-   MongoDB account (local or Atlas)
-   GitHub account (for OAuth)
-   Google Cloud account (for OAuth)

### 1. Clone the Repository

```bash
git clone [https://github.com/Gaurav598/GET-ME-A-CHAI.git](https://github.com/Gaurav598/GET-ME-A-CHAI.git)
cd GET-ME-A-CHAI
2. Install Dependencies
Bash

npm install
3. Set Up Environment Variables
Create a file named .env.local in the root of your project and add the following variables.

Code snippet

# MongoDB Connection String
MONGO_URI="your_mongodb_connection_string"

# NextAuth.js GitHub Credentials
GITHUB_ID="your_github_client_id"
GITHUB_SECRET="your_github_client_secret"

# NextAuth.js Google Credentials
GOOGLE_ID="your_google_client_id"
GOOGLE_SECRET="your_google_client_secret"

# NextAuth.js Secret Key (generate a random string)
NEXTAUTH_SECRET="your_random_secret_string"

# Your application's base URL
NEXT_PUBLIC_URL="http://localhost:3000"
Where to get these values:

MONGO_URI: From your MongoDB Atlas dashboard.

GITHUB_ID & GITHUB_SECRET: By creating a new OAuth App on GitHub. The callback URL should be http://localhost:3000/api/auth/callback/github.

GOOGLE_ID & GOOGLE_SECRET: From the Google Cloud Console by creating a new OAuth 2.0 Client ID. The redirect URI should be http://localhost:3000/api/auth/callback/google.

NEXTAUTH_SECRET: You can generate a strong random string for this.

4. Run the Development Server
Bash

npm run dev
Open http://localhost:3000 with your browser to see the result.

Deploy on Vercel
The easiest way to deploy your Next.js app is to use the Vercel Platform.

Push your code to a GitHub repository.

Import the repository on Vercel.

Add the same environment variables from your .env.local file to the Vercel project settings.

Update the OAuth callback URLs on GitHub and Google to use your new Vercel production URL.

Deploy!
