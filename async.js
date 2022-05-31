async componentDidMount() {

  let urlParams = new URLSearchParams(this.props.location.search);
  let assetId = urlParams.get('assetId');
  document.title = urlParams.get('assetName');
  let protocol = urlParams.get('protocol');
  
  //
  let token = urlParams.get('token')
  //第一次登录判断
  if(token){
      localStorage.setItem('X-Auth-Token',token)
      // console.log(window.location.search,window.location)
      window.location.href = window.location.pathname + '?assetId=' + assetId + '&assetName=' + document.title + '&protocol=' + protocol  
      return
  }else{
      if(!localStorage.getItem('X-Auth-Token')){
          return
      }
  }
  //

  let session = await this.createSession(assetId);
  if (!session) {
      return;
  }
  let sessionId = session['id'];
  if (isEmpty(sessionId)) {
      return;
  }

  this.setState({
      session: session,
      sessionId: sessionId,
      protocol: protocol,
      showFileSystem: session['fileSystem'] === '1'
  });

  this.renderDisplay(sessionId, protocol);

  window.addEventListener('resize', this.onWindowResize);
  window.onfocus = this.onWindowFocus;
}