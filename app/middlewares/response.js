module.exports = async (ctx, next) => {
  ctx.sendOK = data => {
    ctx.response.status = 200
    ctx.body = {
      data: data
    }
  }

  ctx.sendCreated = data => {
    ctx.response.status = 201
    ctx.body = ({
      data: data
    })
  }

  ctx.sendInfo = message => {
    ctx.body = ({
      message: message
    })
  }

  ctx.sendSuccess = () => {
    ctx.response.status = 200
  }

  ctx.sendError = (error, status) => {
    ctx.response.status = status
    ctx.body = {
      error: error
    }
  }

  await next()
}
