window.onload = function() {
    if(Kernal.isLogin()) {
        initUserInfo();
    }

    // 设置监听器，点击搜索按钮后，执行对应函数
    document.getElementById('search-btn').addEventListener('click', function() {
        search();//执行search函数
    });

    // TODO: 在此为 top-right 元素设置监听器
    document.getElementById('top-right').addEventListener('click',function(){
        clickLogin();
    })
    // document.getElementById('top-right') ...

}

function search() {
    // TODO: 搜索触发后的行为
    //任务2
    // var a=document.getElementsByTagName('input');
    // a.setAttribute("id","textContent");
    // a.setAttribute("type","text");
    // var x=document.getElementById('search-input').value;
    //console.log(document.getElementsByTagName('input').value);

    //console.log(document.getElementById('search-input').innerText);
    console.log('');
    var inputs=document.getElementsByTagName("input");
    if(inputs[0].value=="")
    {
        alert('请输入搜索内容');
    }
    else
    {
        alert(inputs[0].value);
    }
}

function clickLogin() {
    if(!Kernal.isLogin()) {
        login();
    }
    else {
        logout();
    }
}

function initUserInfo() {
    // TODO: 修改页面显示错误的 bug
    let username = Kernal.getUserName();
    let content = `<div id="user">
                        <span id="user-img">
                            <img src="img/user.jpg" />
                        </span>
                        <span id="name"> ${username} </span>
                    </div>`;
    //document.getElementById('top-right').innerHTML = content;
    document.getElementById('top-right').textContent = content;
}

// ============================================================ 你不需要去关注的代码

function login() {
    Kernal.login();
    location.reload();
}

function logout() {
    Kernal.logout();
    location.reload();
}