export default {
  model: {
    asynchronous: {
      error: null,
      loading: false
    }
  },
  pattern: {
    asynchronous: props => ({
      state: {
        ui: {
          asynchronous: {
            error: null,
            loading: false
          }
        }
      }
    })
  },
  wrapper: {
    asynchronous: props => ({
      state: {
        ui: {
          asynchronous: { ...props }
        }
      }
    })
  }
};
