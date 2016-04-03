# How to Contribute

Patches are essential for keeping software great. In the spirit of keeping it as simple as possible to contribute changes that get things working in your environment, here are a few guidelines that contributors should follow.  As [Nicholas Gallagher](http://github.com/necolas/normalize.css/blob/master/CONTRIBUTING.md) put it in his contributing guidelines:

> Following these guidelines helps to communicate that you respect the
> time of the developers managing and developing […]. In return, they
> should reciprocate that respect in addressing your issue or
> assessing your patches and features.

## Table of Contents

1. [Getting Started](#getting-started)
    1. [Set Up](#environment-set-up)
    2. [Build Process](#build-process)
2. [Bug Reports](#bug-reports)
    1. [Create a Ticket](#create-a-ticket)
    2. [Example](#example)
3. [Pull Requests](#pull-requests)
    1. [For Contributors](#the-process-for-contributors)
    2. [For Maintainers](#the-process-for-maintainers)
4. [Deployments](#deployments)
    1. [Preparation](#preparation)
    2. [Jenkins](#jenkins)
5. [Gotchas](#gotcha)
6. [Owners](#owners)
7. [Additional Resources](#additional-resources)

## Getting Started

1. Make sure you have a GitHub account.
2. Please ask anyone in the [OWNERS file](https://github.com/chrisopedia/miracleleaguenoc.org/blob/master/OWNERS.md) before making significant changes.  We'd hate for you to put in a lot of work for something that doesn't align with the vision of this project.

### Environment Set Up

1. `sudo gem install overcommit` - In the spirit of code consistency, we ask that you install and setup [Overcommit](https://github.com/brigade/overcommit).  This allows us to use Git Hooks to prevent bad code/untested code and unoptimized code from seeping into the system.
2. In order to keep a consistent code base, we ask that you install and set up [EditorConfig](http://editorconfig.org/) using one of the editor plugins.
3. Clone the repository to your desired location.
4. `npm install` - This is currently used for the build process.
5. `bower install` - The dependency manager allows us to easily and programmatically update all or some dependencies. This is currently handled in the `npm-scripts` as a `postinstall` task.

### Build Process

1. Before you start working, kick off the build process by running `npm start`.

   This will

    - copy the SVG from the icons component to the `dist/svg/` directory
    - process the sass, add vendor prefixes and copy it to the `dist/styles/`
   directory
   - concatenate all JS files and copy to the `dist/scripts` directory
   - start the jekyll server to process the documentation, and run browser-sync
   process to watch file changes

   If all goes well, it should open up Chrome to <localhost:port> with the
   correct port.
2. After you've verified that you're changes haven't busted the documentation
   website, you need to stop the server and prepare for a Pull Request.

## Bug Reports

Bugs are small, testable and demonstratable problems caused by the code.  A good report will be able to easily outline the problem and steps to recreate.  If you're going to submit a bug, please verify you've done everything on this list.

1. [Search](https://github.com/chrisopedia/miracleleaguenoc.org/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen) for the issue.  This means you may have to read through the issue(s) in order to determine if your particular issue has already been created.
2. Check if the issue has been fixed by trying to reproduce the issue in a fresh clone of the repository off the `master` branch.
3. If you've followed the above, and you're still seeing the problem, congratulations, you've found a bug.

### Create a Ticket

Now its time to [submit a ticket](https://github.com/chrisopedia/miracleleaguenoc.org/issues/new).  Bug reports should be thorough and not leave anyone wondering or questioning what you were thinking.  No one should have to ask you anything or require further clarification.  The title should be concise and descriptive; anyone should be able to know what you're issue is at a glance.  For the description section, there are some very specific fields that should be within there.  The first few lines should be a description or summary of the issue; don't be afraid to go into detail.  No one ever said too much detail was a problem, and if they did, it wasn't me; you can follow the [Issues Template](https://github.com/chrisopedia/miracleleaguenoc.org/blob/master/ISSUE_TEMPLATE.md). A few other things should be included are listed as such:

1. **OS & version**: Always include the OS(es) and version(s) where you found the issue.  If, for example its Mavericks, you can put OSX 10.9.1.
2. **Test Results**: If there is a fail in a particular test, include the name of the test, otherwise list as "Passed".
3. **Steps to Reproduce**: Please include the steps you followed to find this bug.  This will make my life so much easier to help fix the issue.  Screenshots can be a big help as well along with the steps.
4. **Line(s) of Code**: Definitely not a requirement, but doesn't hurt if you've already pin pointed the issue.
5. **Browser(s) Version(s)**: What version are you running?

For the comment section, please follow the example below and you'll be on the right path.  Let's assume that a you're trying to save a seat and its throwing an error, here's an example.

### Example

```markdown
Saving seat throws error

**OS**: OSX 10.8.3
**Test Results**: Passed
**Steps to Reproduce**:
1.  Open http://qa12-buyer.lab1.fanops.net/seats/2151
2.  Edit the name from '.FOX Networks (Germany)' to 'FOX Networks'
3.  Hit the 'Save' button
3.  Notice the error suggesting that you can't save
**Browser(s) Version(s)**: All browsers, but founded initially in Chrome 38.0.2125.111
```

## Pull Requests

If you're unfamiliar with the Github flow, please [read this guide](https://guides.github.com/introduction/flow/index.html).

### The Process (for contributors)

1. Fork the repo using the [Fork button](https://github.com/chrisopedia/miracleleaguenoc.org#fork-destination-box)
2. Clone the repo (`git clone https://github.com/<github-user>/legion`)
3. Change into the directory you just cloned.
4. Add your fork as a remote (`git remote add <github-user> https://github.com/<github-user>/legion`)
5. Create your feature branch (`git checkout -b feature/my-new-feature`)
6. Commit your changes (`git commit`), follow the format suggested below.  Please don't use the shortcut flag `git commit -m <message>`.
7. Push to the branch (`git push <github-user> feature/my-new-feature`)
8. Create new [Pull Request](https://github.com/chrisopedia/miracleleaguenoc.org/compare) using the [Pull Request Template](https://github.com/chrisopedia/miracleleaguenoc.org/blob/master/PULL_REQUEST_TEMPLATE.md)

### The Process (for maintainers)

1. Clone the repo (`git clone https://github.com/chrisopedia/miracleleaguenoc.org`)
2. If you've cloned previously, then get latest changes.

    ```bash
    $ git checkout master
    $ git pull origin master
    ```

3. Create your feature branch (`git checkout -b feature/my-new-feature`)
4. Commit your changes (`git commit`), follow the format suggested below.  Please don't use the shortcut flag `git commit -m <message>`.
5. Push to the branch (`git push origin feature/my-new-feature`)
6. Create new [Pull Request](https://github.com/chrisopedia/miracleleaguenoc.org/compare) using the [Pull Request Template](https://github.com/chrisopedia/miracleleaguenoc.org/blob/master/PULL_REQUEST_TEMPLATE.md)

**IMPORTANT**: Every patch and subsequent message should have a bug attached.  If there is no ticket, no work should be done.

## Deployments

After your pull request has been given the green light, its time to prepare
   for the deployment.

### Preparation

1. Merge your feature branch into master
2. Update the version number in the
   [package.json](https://github.com/chrisopedia/miracleleaguenoc.org/blob/master/package.json#L9)
3. Run `npm run dist` to compile a new version of framework.  This will build
   all files, with the exception of the SVGs, with a `X.Y.Z` versioning as
   a suffix to the file name
4. Edit the
   `[meta.html](https://github.com/chrisopedia/miracleleaguenoc.org/blob/master/_includes/meta.html#L50)
   include to include the version suffix on the file and run the build process
   one more time (`npm start`) to ensure that nothing broke.  Don't check in
   this change
5. Once verified, commit your changes into master with the message as 'Bump to
   version <X.Y.Z>'
6. Tag the release by running `git tag <X.Y.Z.>`
7. Push to the origin, including the tags by running `git push origin master
   --tags`

You're now ready to deploy to the various environments using Jenkins.

### Jenkins

This topic is still in flux right now.  Documentation will follow as more
unfolds.

## Gotchas

- Please avoid working directly on the `master` branch.
- Make commits of logical units.
- Check for unnecessary whitespace with `git diff --check` before committing.
- Update the OWNERS file.  See [OWNERS](#owners) below for more information.
- Make sure your commit messages are in the [proper format](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html).

```diff
    Create new feature (use CRUD-style language)

    More detailed explanatory text, if necessary.  Wrap it to about 72
    characters or so.  In some contexts, the first line is treated as the
    subject of an email and the rest of the text as the body.  The blank
    line separating the summary from the body is critical (unless you omit
    the body entirely); tools like rebase can get confused if you run the
    two together.

    Write your commit message in the imperative: "Fix bug" and not "Fixed bug"
    or "Fixes bug."  This convention matches up with commit messages generated
    by commands like git merge and git revert. I prefer to use CRUD-style
    messaging; all messages should start with either Create, Read (hardly ever
    used), Update & Delete.

    Further paragraphs come after blank lines.

    - Bullet points are okay, too
    - Typically a hyphen or asterisk is used for the bullet, preceded by a
      single space, with blank lines in between, but conventions vary here
    - Use a hanging indent

    Issue: #<number of issue>
```

## OWNERS

The developers on the Chromium project have created an interesting standard of attaching reviewers to a particular set of code.  The concept is best described by them…

> OWNERS files are a way of specifying a set of reviewers whose review is
> required to modify certain areas of code<sup>[1][owners]</sup>

You can read more at [Chromium Projects][owners] site, but the basic concept is that if you edit by either changing existing or creating new functionality, then add your name to the OWNERS file in the parent directory that encompasses your feature.  If you've made a global change that affects the entire repository, then you should add your name to the root OWNERS file.

## Additional Resources

- [General GitHub documentation](http://help.github.com/)
- [GitHub Send Pull Request Documentation](http://help.github.com/send-pull-requests/)
- [GitHub Using Pull Request Documentation](https://help.github.com/articles/using-pull-requests/)
- [Forking a Github Repo](http://help.github.com/fork-a-repo/)

[owners]: http://www.chromium.org/developers/owners-files
