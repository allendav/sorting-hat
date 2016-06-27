# sorting-hat

Sorting hat makes it easier to manage issue assignments across multiple repositories.

Sorting Hat displays issues by assignee for the automattic woocommerce-connect-client repository
by default. To add other repository, copy `config/default.json` to `config/local.json` and edit
that file. If the repository is private, you will have to obtain a repo API token for your GitHub user
and save it in that file as well.

Before you run the app for the first time, simply type

```
npm install
```

And then, thereafter just do

```
npm run dev
```

And open your browser to `localhost:8000` and see all the open issues across all the repos organized by assignee, including a separate column for unassigned issues needing a home.
