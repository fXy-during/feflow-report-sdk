import shell from "shelljs";

export const getRTX = () => {
    let rtx = "";

    if (shell.which('git')) {
        shell.echo('Sorry, this script requires git');
        // shell.exit(1);
        if (shell.exec('git config --get user.name').code !== 0) {
            rtx = shell.exec('git config --get user.name', { silent: true }).stdout
        }
    }
    return rtx

}