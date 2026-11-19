# Portfolio

A Next.js portfolio with selected projects, credentials, a résumé, and a contact form.

Run `npm ci` and `npm run dev`, then open http://localhost:3000. Use Node.js 24 to run the TypeScript imports in the test suite.

- `src/app` owns routes, metadata, and the application layout.
- `src/features` owns page sections, their content, and feature-specific interactions.
- `src/components` holds shared presentation and the site shell. Edit `src/lib/profile.ts` for site-wide profile and contact details.
- `public` holds the résumé, images, and certificate assets.

Run `npm run lint` and `npm test` for local checks. With the site running, run `npm run test:smoke` to check routes, assets, and rendered markup. Set `PORTFOLIO_TEST_URL` if the site is on a different address. Contact tests mock FormSubmit and do not send email.
