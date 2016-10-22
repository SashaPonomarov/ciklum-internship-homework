module.exports = {
  db: {
    login: 'login',
    pwd: 'password',
    url: 'url',
    setting: function() {
      return 'mongodb://' + this.login + ':' + this.pwd + '@' + this.url;
    }
  },
  secret: '0f93h85d85f854dp48nu39xy47y5r5hww'
}