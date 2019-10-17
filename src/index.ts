import path from "path";


interface ReportContext {
    base: String// pathFn.join(osenv.home(), './.feflow');
    rcPath: String // pathFn.join(base, '.feflowrc.yml');
    version: String // pkg.version;
    baseDir: String // base + sep;
    pkgPath: String // pathFn.join(base, 'package.json');
    pluginDir: String // pathFn.join(base, 'node_modules') + sep;
    logDir: String // pathFn.join(base, 'logs');
    args: String // camelizeKeys(args);
    config: String // utils.parseYaml(rcPath);            // Read feflow local config.
    pwd: String
    pkgConfig: {
        name: string
    }
}

class Report {
    ctx: ReportContext

    constructor(feflowContext: any) {
        this.ctx = feflowContext;
        this.ctx.pkgConfig = require(path.resolve(__dirname, "./package.json"));
    }
    get timestamp() {
        return Date.now();
    }
    get project() {
        const { pkgConfig } = this.ctx;
        const { name } = pkgConfig
        return name
    }
    report({ cmd, args }) {

    }

}


export default Report