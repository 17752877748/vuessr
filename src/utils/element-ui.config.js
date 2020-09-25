import {
  Pagination,
  Form,
  FormItem,
  Loading,
  Input,
  Button
} from 'element-ui';

const components = {
  Pagination,
  Form,
  FormItem,
  Loading,
  Input,
  Button
}

const componentsHandler = {
  install(Vue) {
    Object.keys(components).forEach(key =>
      Vue.use(components[key])
    )
  }
}

export default componentsHandler
