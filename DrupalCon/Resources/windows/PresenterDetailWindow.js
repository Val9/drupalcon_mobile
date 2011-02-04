(function() {
  
  DrupalCon.ui.createPresenterDetailWindow = function(settings) {
    Drupal.setDefaults(settings, {
      title: 'title here',
      uid: '',
      name: '',
      tabGroup: undefined
    });

    var presenterDetailWindow = Titanium.UI.createWindow({
      id: 'presenterDetailWindow',
      title: settings.title,
      backgroundColor: '#FFF',
      tabGroup: settings.tabGroup
    });

    if (Ti.Platform.name == 'android') {
      var itemWidth = Ti.UI.currentWindow.width - 40;
    }
    else {
      var itemWidth = presenterDetailWindow.width - 40;
    }
    var presenterData = settings.data;
    dpm(presenterData);
    var tvData = [];
    var blueBg = '#CAE2F4';

    // Structure
    var tv = Ti.UI.createTableView({
      textAlign: 'left',
      layout:'vertical'
    });
    var headerRow = Ti.UI.createTableViewRow({height:90,backgroundColor:blueBg});
    var twitterRow = Ti.UI.createTableViewRow({hasChild:true,height:40});
    var linkedinRow = Ti.UI.createTableViewRow({hasChild:true,height:40});
    var facebookRow = Ti.UI.createTableViewRow({hasChild:true,height:40});
    var bioRow = Ti.UI.createTableViewRow({hasChild:false,height:'auto'});

    // Content
    var avatar = Ti.UI.createImageView({
      height: 80,
      width: 80,
      image:'images/userpictdefault2.png',
      top: 0,
      left: 0
    });
    headerRow.add(avatar);

    var fullName = Ti.UI.createLabel({
      text:(presenterData.fullName != undefined) ? presenterData.fullName : presenterData.name,
      font:{fontSize: 20, fontWeight: 'bold'},
      textAlign: 'left',
      color: '#000',
      height: 'auto',
      left: 90,
      top: 15,
      width: itemWidth
    });
    headerRow.add(fullName);

    var name = Ti.UI.createLabel({
      text:(presenterData.fullName != undefined) ? presenterData.data.name : '',
      font:{fontSize: 14, fontWeight: 'bold'},
      textAlign: 'left',
      color: '#999',
      height: 'auto',
      left: 90,
      top: 44,
      width: itemWidth
    });
    headerRow.add(name);

    var company = Ti.UI.createLabel({
      text:presenterData.data.company,
      font:{fontSize: 14, fontWeight: 'bold'},
      backgroundColor: '#fff',
      textAlign: 'left',
      color: '#999',
      height: 'auto',
      left: 90,
      top: 64,
      width: itemWidth
    });
    headerRow.add(company);
    tvData.push(headerRow);

    if (presenterData.data.twitter != undefined){
      var twitter = Ti.UI.createLabel({
        text:"twitter: " + presenterData.data.name,
        twitter:presenterData.data.twitter,
        color:'#000',
        font:{fontSize: 14, fontWeight: 'bold'},
        left: 15,
        right: 15,
      });

      twitter.addEventListener('click', function(e) {
        var webview = Titanium.UI.createWebView({url:e.source.twitter});
        var webWindow = Titanium.UI.createWindow();
        webWindow.add(webview);

        if (Ti.Platform.name == 'android') {
          var currentTab = Titanium.UI.currentTab;
        }
        else {
          var currentTab = presenterDetailWindow.tabGroup.activeTab;
        }
        currentTab.open(webWindow);
      });
      twitterRow.add(twitter);
      tvData.push(twitterRow);
    }

    if (presenterData.data.linkedin != undefined){

    }

    if (presenterData.data.facebook != undefined){

    }

    var bio = Ti.UI.createLabel({
      text:presenterData.data.bio,
      backgroundColor:'#fff',
      textAlign:'left',
      color:'#000',
      top:20,
      left:10,
      right:15,
      bottom:10,
      width:itemWidth,
      height:'auto'
    });
    bioRow.add(bio);
    tvData.push(bioRow);

    tv.setData(tvData);
    presenterDetailWindow.add(tv);
    return presenterDetailWindow;
  };

})();
