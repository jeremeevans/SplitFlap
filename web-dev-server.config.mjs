console.log(JSON.stringify(process.env.appPort))

export default {
    nodeResolve: true,
    port: parseInt(process.env.appPort)
  };
  