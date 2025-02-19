# Git Commands Cheat Sheet

## **Basic Git Commands**

### **Configuration**
- `git config --global user.name "Your Name"`: Set your username.
- `git config --global user.email "youremail@example.com"`: Set your email.
- `git config --global core.editor "editor"`: Set your default text editor.

### **Repository Initialization**
- `git init`: Initialize a new Git repository in the current directory.
- `git clone <repository-url>`: Clone an existing repository from a remote source.

### **Working with Branches**
- `git branch`: List all local branches.
- `git branch <branch-name>`: Create a new branch.
- `git branch -d <branch-name>`: Delete a branch locally.
- `git branch -m <old-branch-name> <new-branch-name>`: Rename a branch.
- `git checkout <branch-name>`: Switch to a branch.
- `git checkout -b <branch-name>`: Create and switch to a new branch.
- `git merge <branch-name>`: Merge a branch into the current branch.
- `git rebase <branch-name>`: Rebase the current branch onto another branch.

### **Staging and Committing Changes**
- `git status`: Check the status of the working directory and staging area.
- `git add <file>`: Add a file to the staging area.
- `git add .`: Add all files in the current directory to the staging area.
- `git commit -m "commit message"`: Commit staged changes with a message.
- `git commit -a`: Commit all tracked files with changes, without needing to `git add`.
- `git reset <file>`: Unstage a file, keeping changes in the working directory.
- `git reset --hard`: Reset the working directory and staging area to the last commit.
- `git revert <commit>`: Revert a specific commit (creates a new commit that undoes changes).

### **Viewing History and Logs**
- `git log`: Show the commit history.
- `git log --oneline`: Show a condensed version of the commit history.
- `git diff`: Show changes between the working directory and the index (staging area).
- `git diff --staged`: Show changes between the staging area and the last commit.
- `git show <commit>`: Show details of a specific commit.
- `git blame <file>`: Show who changed each line in a file and when.

### **Working with Remotes**
- `git remote -v`: List remote repositories associated with the project.
- `git remote add <name> <url>`: Add a remote repository.
- `git fetch`: Fetch changes from the remote repository, without merging.
- `git pull`: Fetch changes from the remote repository and merge them into the current branch.
- `git push`: Push changes to the remote repository.
- `git push -u origin <branch-name>`: Push the current branch to the remote and set it to track the remote branch.
- `git push origin --delete <branch-name>`: Delete a remote branch.
- `git remote rename <old-name> <new-name>`: Rename a remote.
- `git remote remove <name>`: Remove a remote.

### **Working with Tags**
- `git tag`: List all tags in the repository.
- `git tag <tag-name>`: Create a new tag at the current commit.
- `git tag -d <tag-name>`: Delete a tag locally.
- `git push origin <tag-name>`: Push a tag to the remote.
- `git push --tags`: Push all tags to the remote.

### **Undoing Changes**
- `git reset <commit>`: Reset the current branch to a specific commit, keeping changes in the working directory.
- `git reset --hard <commit>`: Reset the current branch to a specific commit and discard all changes in the working directory.
- `git clean -f`: Remove untracked files from the working directory.
- `git clean -fd`: Remove untracked files and directories.
- `git checkout -- <file>`: Discard changes to a specific file in the working directory.

---

## **Advanced Git Commands**

### **Cherry-picking**
- `git cherry-pick <commit>`: Apply a specific commit from another branch onto your current branch.

### **Stashing Changes**
- `git stash`: Stash your changes (temporarily save them and clean your working directory).
- `git stash pop`: Apply the latest stashed changes and remove them from the stash list.
- `git stash apply`: Apply the latest stashed changes but keep them in the stash list.
- `git stash list`: List all stashes.
- `git stash drop`: Remove a specific stash from the list.

### **Rebasing and Interactive Rebase**
- `git rebase <branch>`: Rebase the current branch onto another branch.
- `git rebase -i <commit>`: Start an interactive rebase from a specific commit (useful for editing commit history).

### **Squashing Commits**
- `git merge --squash <branch>`: Squash multiple commits from a branch into one commit when merging.
- `git rebase -i <commit>`: Interactive rebase to combine multiple commits into one.

### **Submodules**
- `git submodule add <repository-url> <path>`: Add a submodule to the repository.
- `git submodule update`: Update submodules to the latest commit.
- `git submodule update --init`: Initialize and update all submodules.

---

## **Miscellaneous**
- `git help <command>`: Get help for a specific Git command.
- `git gc`: Clean up unnecessary files and optimize the repository.
- `git config --global core.editor <editor>`: Set the default text editor (e.g., `nano`, `vim`).

