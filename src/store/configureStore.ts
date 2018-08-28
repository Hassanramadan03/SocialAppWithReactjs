import configureStoreDev from 'store/configureStore.dev'
import configureStoreProd from 'store/configureStore.prod'

const store = process.env.NODE_ENV === 'production'
? configureStoreProd
: configureStoreDev

export default store