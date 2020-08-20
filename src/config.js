const local = {
    urls: {
        ENV: "http://localhost:8000"
    }
}
const dev = {
    urls: {
        ENV: ""
    }
}
const uat = {
    urls: {
        ENV: ""
    }
}
const prod = {
    urls: {
        ENV: ""
    }
}

const getConfig = (config) => {
    let env;
    switch (env) {
        case "dev":
            env = dev;
            break;
        case "uat":
            env = uat;
            break;
        case "prod":
            env = prod;
            break;
        default:
            env = local
    }
}

const config = getConfig(process.env.APP_ENV);

export default {
    ...config,
}

