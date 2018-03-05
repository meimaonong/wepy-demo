import wepy from 'wepy'

export default class TestMixin extends wepy.mixin {
    data = {
        foo: 'mixin foo'
    }

    methods = {
        changeList() {
            console.log('tap')
        }
    }
}