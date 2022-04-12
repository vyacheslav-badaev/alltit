import { mount } from '@vue/test-utils'
import Logo from '@/components/Logo.vue'
describe('Logo', () => {
  test('is a Vue instances s', () => {
    const wrapper = mount(Logo)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
