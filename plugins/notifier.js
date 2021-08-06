export default ({ app, store }, inject) => {
  inject('notifier', {
    showMessage({ content = '', color = '' }) {
      store.commit('setSnack', { content, color })
    },
    error(content) {
      const color = 'red'
      store.commit('setSnack', { content, color })
    },
    warning(content) {
      const color = '#e35e2a'
      store.commit('setSnack', { content, color })
    },
    info(content) {
      const color = '#5754bd'
      store.commit('setSnack', { content, color })
    },
    success(content) {
      const color = '#36adae'
      store.commit('setSnack', { content, color })
    }
  })
}
