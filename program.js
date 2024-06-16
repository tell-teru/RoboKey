/* kadai14.js */

window.addEventListener("DOMContentLoaded", init); 

function init() { 
    const width = 500; 
    const height = 500;
    // let rot = 30;
    let count_color = 1;
    let flag_rotation = 0;
    let count_rotation = 0;
    let flag_jamp =0;
    let count_jump = 0;
    let flag_move =0;
    let count_move = 0;
    let flag_size =0;
    let count_size = 0;
    let flag_ring =0;
    let count_ring = 0;
    let flag_stop = 0;
    let count_stop = 0;
    let flag_ball = 0;
    let count_ball = 0;
    let flag_omp = 0;
    let count_omp = 0;

    // レンダラーを作成 
    const renderer = new THREE.WebGLRenderer({ 
        canvas: document.querySelector("#myCanvas") 
    }); 
    renderer.setSize(width, height); /* ウィンドウサイズの設定 */ 
    renderer.setClearColor(0xf0f8ff); /* 背景色の設定 */
    // renderer.setClearColor(0xffffff); /* 背景色の設定 */ 
    document.body.appendChild(renderer.domElement);

    // シーンを作成 
    const scene = new THREE.Scene(); 

    // カメラを作成 
    const camera = new THREE.PerspectiveCamera(45, width / height); 
    camera.position.set(0, 0, -70); 
    camera.lookAt(new THREE.Vector3(0,0,0));


    // カラー設定
    const headMat = new THREE.MeshStandardMaterial({ 
        color: 0xbec8d1
    });
    const bodyMat = new THREE.MeshStandardMaterial({
        color: 0x373b3e
    });
    const highlight = new THREE.MeshStandardMaterial({ 
        color: 0x20b2aa
        // corol: 0xc3e5e7
    }); 
    const ringMat = new THREE.MeshBasicMaterial({
        color: 0xffff00
    });
    const toneMat = new THREE.MeshBasicMaterial({
        color: 0x20b2aa
    });



    // グループ化
    var robot = new THREE.Group();


    // 頭
    var robot_head = new THREE.Group();

    const head = new THREE.Mesh(new THREE.SphereGeometry(9,16,12),headMat);
    robot_head.add(head);

    const eye1 = new THREE.Mesh(new THREE.SphereGeometry(1.5,16,12),highlight);
    eye1.position.set(5,2,-6);
    robot_head.add(eye1);

    const eye2 = new THREE.Mesh(new THREE.SphereGeometry(1.5,16,12),highlight);
    eye2.position.set(-5,2,-6);
    robot_head.add(eye2);

    const mouse = new THREE.Mesh(new THREE.CylinderGeometry(2,2,1,3),highlight);
    mouse.position.set(0,-3,-8.2);
    mouse.rotation.set(Math.PI/2.5,Math.PI,0);
    robot_head.add(mouse);

    const ear1 = new THREE.Mesh(new THREE.ConeGeometry(3,5,8,1,false,0,Math.PI*2),highlight);
    ear1.position.set(10,0,0);
    ear1.rotation.set(Math.PI/2,0,-Math.PI/2);
    robot_head.add(ear1);

    const ear2 = new THREE.Mesh(new THREE.ConeGeometry(3,5,8,1,false,0,Math.PI*2),highlight);
    ear2.position.set(-10,0,0);
    ear2.rotation.set(Math.PI/2,0,Math.PI/2);
    robot_head.add(ear2);

    // robotに追加
    robot.add(robot_head);

    // ロボットの変更
    robot_head.position.set(0,10,0);


    // 胴体
    var robot_body = new THREE.Group();

    const body = new THREE.Mesh(new THREE.CylinderGeometry(5,10,20,30,1,false,0,Math.PI*2),bodyMat);
    body.position.set(0,-7,0)
    robot_body.add(body);

    const arm1 = new THREE.Mesh(new THREE.CylinderGeometry(1,2,15,30,1,false,0,Math.PI*2),highlight);
    arm1.position.set(10,-3,0);
    arm1.rotation.set(0,0,Math.PI/4);
    robot_body.add(arm1);

    const arm2 = new THREE.Mesh(new THREE.CylinderGeometry(1,2,15,30,1,false,0,Math.PI*2),highlight);
    arm2.position.set(-10,-3,0);
    arm2.rotation.set(0,0,-Math.PI/4);
    robot_body.add(arm2);

    const leg1 = new THREE.Mesh(new THREE.CylinderGeometry(2.5,1.8,10,30,1,false,0,Math.PI*2),highlight);
    leg1.position.set(3,-20,0);
    robot_body.add(leg1);

    const leg2 = new THREE.Mesh(new THREE.CylinderGeometry(2.5,1.8,10,30,1,false,0,Math.PI*2),highlight);
    leg2.position.set(-3,-20,0);
    robot_body.add(leg2);


    //robotに追加
    robot.add(robot_body);

    // ロボットの変更
    robot_body.position.set(0,0,0);

    // リング
    const ring = new THREE.Mesh(new THREE.TorusGeometry(7,0.7,8,20,Math.PI*2),ringMat);
    ring.position.set(0,12,0);
    ring.rotation.set(Math.PI/2,0,0);
    robot.add(ring);


    // ロボットの変更
    ring.position.set(0,23,0);

    //seaneに追加
    scene.add(robot);
    //縮小
    robot.scale.set(0.3,0.3,0.3);
    // ロボットの変更
    robot.position.set(0,0,0);
    // robot.rotation.set(0,Math.PI/2,0);
    robot.rotation.set(0,0,0);











    // グループ化
    var kk = new THREE.Group();

    const khead = new THREE.Mesh(new THREE.SphereGeometry(9,16,12),headMat);
    kk.add(khead);

    const keye1 = new THREE.Mesh(new THREE.SphereGeometry(1.5,16,12),highlight);
    keye1.position.set(5,2,-6);
    kk.add(keye1);

    const keye2 = new THREE.Mesh(new THREE.SphereGeometry(1.5,16,12),highlight);
    keye2.position.set(-5,2,-6);
    kk.add(keye2);

    const kmouse = new THREE.Mesh(new THREE.CylinderGeometry(2,2,1,3),highlight);
    kmouse.position.set(0,-3,-8.2);
    kmouse.rotation.set(Math.PI/2.5,Math.PI,0);
    kk.add(kmouse);

    const kear1 = new THREE.Mesh(new THREE.ConeGeometry(3,5,8,1,false,0,Math.PI*2),highlight);
    kear1.position.set(10,0,0);
    kear1.rotation.set(Math.PI/2,0,-Math.PI/2);
    kk.add(kear1);

    const kear2 = new THREE.Mesh(new THREE.ConeGeometry(3,5,8,1,false,0,Math.PI*2),highlight);
    kear2.position.set(-10,0,0);
    kear2.rotation.set(Math.PI/2,0,Math.PI/2);
    kk.add(kear2);

    // // robotに追加
    // scene.add(kk);

    // ロボットの変更
    kk.position.set(0,0,0);


 // グループ化
    var ball = new THREE.Group();

    const B1 = new THREE.Mesh(new THREE.SphereGeometry(1,20,20),highlight);
    ball.add(B1);

    // ロボットの変更
    B1.position.set(0,10,0);



    var tone = new THREE.Group();


    var omp1 = new THREE.Group();

    const omp1c = new THREE.Mesh(new THREE.SphereGeometry(1,20,20),toneMat);
    omp1c.position.set(0.5,0,-10);
    omp1.add(omp1c);

    const omp1p = new THREE.Mesh(new THREE.CylinderGeometry(0.3,0.3,4,20,1,false,0,Math.PI*2),toneMat);
    omp1p.position.set(0,2,-10);
    omp1.add(omp1p);


    var omp2 = new THREE.Group();

    const omp2c = new THREE.Mesh(new THREE.SphereGeometry(1,20,20),toneMat);
    omp2c.position.set(0,0,0);
    omp2.add(omp2c);

    const omp2p = new THREE.Mesh(new THREE.CylinderGeometry(0.3,0.3,4,20,1,false,0,Math.PI*2),toneMat);
    omp2p.position.set(-0.5,2,0);
    omp2.add(omp2p);

    const omp2cc = new THREE.Mesh(new THREE.SphereGeometry(1,20,20),toneMat);
    omp2cc.position.set(-3.5,0,0);
    omp2.add(omp2cc);

    const omp2pp = new THREE.Mesh(new THREE.CylinderGeometry(0.3,0.3,4,20,1,false,0,Math.PI*2),toneMat);
    omp2pp.position.set(-4,2,0);
    omp2.add(omp2pp);

    const omp2pi = new THREE.Mesh(new THREE.BoxGeometry(4,0.3,0.3,1,1,1),toneMat);
    omp2pi.position.set(-2.2,4,0);
    omp2.add(omp2pi);


    var omp3 = new THREE.Group();

    const omp3c = new THREE.Mesh(new THREE.SphereGeometry(1,20,20),toneMat);
    omp3c.position.set(0,0,0);
    omp3.add(omp3c);

    const omp3p = new THREE.Mesh(new THREE.CylinderGeometry(0.3,0.3,4,20,1,false,0,Math.PI*2),toneMat);
    omp3p.position.set(-0.5,2,0);
    omp3.add(omp3p);

    const omp3cc = new THREE.Mesh(new THREE.SphereGeometry(1,20,20),toneMat);
    omp3cc.position.set(-3.5,0,0);
    omp3.add(omp3cc);

    const omp3pp = new THREE.Mesh(new THREE.CylinderGeometry(0.3,0.3,4,20,1,false,0,Math.PI*2),toneMat);
    omp3pp.position.set(-4,2,0);
    omp3.add(omp3pp);

    const omp3pi = new THREE.Mesh(new THREE.BoxGeometry(4,0.3,0.3,1,1,1),toneMat);
    omp3pi.position.set(-2.2,4,0);
    omp3.add(omp3pi);

    const omp3pi2 = new THREE.Mesh(new THREE.BoxGeometry(4,0.3,0.3,1,1,1),toneMat);
    omp3pi2.position.set(-2.2,3,0);
    omp3.add(omp3pi2);

    omp1.position.set(10,18,0);
    omp2.position.set(-8,10,0);
    omp3.position.set(13,-14,0);

    // tone.material.color.set(toneco);


    tone.add(omp1);
    tone.add(omp2);
    tone.add(omp3);


    // 重力設定
    const gravity = 0.4;

    // ジャンプ中の時間
    let time = 0;

    // y軸方向の初速度
    const yv = 10;

    // // 投げ上げの式
    // y = 0.5 * gravity * time * time - yv * time + (width - h);
    // time++;


        var num = 0;// constは定数　var が変数




    // キー入力
    document.addEventListener("keydown", onDocumentKeyDown, false);
    function onDocumentKeyDown(event_k) {
        let keyCode = event_k.which;

        // h: 頭1回転
        if (keyCode == 72) {
            // robot_head.rotation.y += radian;
            flag_rotation = 1;
            head_rotate_animation();
        }
        // j: ジャンプ
        else if(keyCode == 74){
            position_y =robot.position.y;//最初の位置情報を保存しておく
            position_ky = kk.position.y;
            flag_jamp = 1;
            jump_animation();
        }
        // →: 動く
        else if(keyCode == 39){
            robot.rotation.set(0,Math.PI/2,0);// 右を向く
            flag_move = 1;
            move_animation_right();
        }
        // ←: 動く
        else if(keyCode == 37){
            robot.rotation.set(0,-Math.PI/2,0);// 右を向く
            flag_move = 1;
            move_animation_left();
        }
        // ↑: 小さく
        else if(keyCode == 38){
            flag_size = 2;
            move_animation_size();
        }
        // ↓: 大きく
        else if(keyCode == 40){
            flag_size = 1;
            move_animation_size();
        }
        // r: 回転
        else if(keyCode == 82){
            flag_rotation = 1;
            rotate_animation();
        }
        // l:リング
        else if(keyCode == 76){
            flag_ring = 1;
            ring_animation();
        }
        // s:stop
        else if(keyCode == 83){
            position_x = robot.position.x;//最初の位置情報を保存しておく
            position_y = robot.position.y;
            position_z = robot.position.z;

            // position_kx = kk.position.x;//最初の位置情報を保存しておく
            // position_ky = kk.position.y;
            // position_kz = kk.position.z;

            ring_rotate = ring.rotation;

            flag_ball = 0;
            flag_omp = 0;

            // flag_stop = 1;
            // stop_animation();

            var st = true;

            //変数おいてそれがtrueの時stop処理を行うようにする　　animationの中で変数がtrueかどうかの判断を行う

            // if(st == true){
            //     robot.position.x = position_x;// 元の位置に戻す
            //     robot.position.y = position_y;// 元の位置に戻す
            //     robot.position.z = position_z;// 元の位置に戻す
            // }
        }
        // i: 入れ替え
        else if(keyCode == 73){
            scene.remove(robot);// robotを消す
            scene.remove(ball)
            scene.add(kk);// kkを投入
        }
        // o: 戻す
        else if(keyCode == 79){
            scene.remove(kk);// kkを消す
            // scene.remove(ball);
            scene.add(robot);// robotを投入
        }
        // u: 音符
        else if(keyCode == 85){
            scene.add(tone);
            position_tone = tone.position;
            // tone.material.color.set(0xff0000);


            flag_omp = 1;
            omp_animation();
        }
        // b: ボール
        else if(keyCode == 66){
            // scene.remove(robot);// robotを消す
            scene.remove(kk);// kkを消す
            // scene.remove(robot.arm1);
            scene.add(B1);
            // scene.add(B2);
            // scene.add(B3);
        }
        // z: ジャグリング
        else if(keyCode == 90){
            flag_ball = 1;
            ball_animation();
        }



        // Space: 初期位置
        else if(keyCode == 32){
            robot.scale.set(0.3,0.3,0.3);
            robot.position.set(0,0,0);
            robot.rotation.set(0,0,0);

            kk.position.set(0,0,0);
            kk.rotation.set(0,0,0);

            ring.position.set(0,23,0);
            ring.rotation -= 0.1;

            // ring.position.x -= 0.4;
            // ring.position.y -= 0.2;

            B1.position.set(0,10,0);
            // tone.position.set();
            omp1.position.set(10,18,0);
            omp2.position.set(-8,10,0);
            omp3.position.set(13,-14,0);


            flag_rotation = 0; // let つけてた＝ここで新しくローカル変数を作成してしまっていた
            flag_jamp =0;
            flag_move =0;
            flag_size =0;
            flag_ball =0;
            flag_omp =0;
        }
        render();
    }


    // マウス
    document.addEventListener("mousedown", clickPosition, false);
    function clickPosition(event_m) {
        // X座標
        var x = event_m.clientX;
        // Y座標
        var y = event_m.clientY;

        // 取得座標を正規化
        var mouse = new THREE.Vector2();
        mouse.x =  ( x / width ) * 2 - 1;
        mouse.y = -( y / height ) * 2 + 1;

        // ロボットの座標も正規化(元からwindowの中心に設置されているので２かけて１引いたりはしなくて良い)
        var robotX = (robot.position.x /width);
        var robotY = -(robot.position.y /width);

        // Raycasterでオブジェクト取得
        // Raycasterインスタンス作成
        var raycaster = new THREE.Raycaster();
        // 取得したX、Y座標でrayの位置を更新
        // cameraは作成済みのThree.jsのカメラ
        raycaster.setFromCamera( mouse, camera );
        // オブジェクトの取得
        // sceneは作成済みのThree.jsのシーン
        var intersects = raycaster.intersectObjects( scene.children );

        if(mouse.x < robotX){// ロボットよりも左側を押した場合
            robot.rotation.set(0,-Math.PI/2,0);// 左を向く
            flag_move = 1;
            move_animation_left();// 左に動く

            if(mouse.y > robotY){ // ロボットより上あたり
                flag_size = 2;
                move_animation_size();
            }
            else if(mouse.y <= robotY){
                flag_size = 1;
                move_animation_size();
            }

        }
        else if(mouse.x > robotX){// ロボットよりも右側を押した場合
            robot.rotation.set(0,Math.PI/2,0);// 右を向く
            flag_move = 1;
            move_animation_right();// 右に動く


            if(mouse.y > robotY){
                flag_size = 2;
                move_animation_size();
            }
            else if(mouse.y <= robotY){
                flag_size = 1;
                move_animation_size();
            }
        }

        render();
        console.log(mouse.x);
        console.log(mouse.y);

    }


    function head_rotate_animation() {
        if (count_rotation >= 2 * Math.PI) {// 止まる処理
            count_rotation = 0;
            flag_rotation = 0;
        }
        else if (flag_rotation == 1) {// 動く処理
            let requestId = requestAnimationFrame(head_rotate_animation);
            robot_head.rotation.y += 0.1;
            kk.rotation.y += 0.1;
            count_rotation += 0.1;
            render();
        }
    }
    function rotate_animation() {
        if (flag_rotation == 1) {// 動く処理
            let requestId = requestAnimationFrame(rotate_animation);
            robot.rotation.y += 0.1;
            kk.rotation.x += 0.1;
            kk.rotation.y -= 0.1;
            count_rotation += 0.1;
            render();
        }
    }

    function jump_animation() {
        if (position_y > robot.position.y){//8.5は着地(スタート)位置に合わせて微妙に調整した。
            robot.position.y = position_y;// 元の位置に戻す
            time = 0;// timeを０に戻さないと落ちていく
            count_jump = 0;
            flag_jamp = 0;
        }

        else if (flag_jamp == 1){// flag使うことで繰り返し行える
            let requestId = requestAnimationFrame(jump_animation);
            robot.position.y = -3.0 * gravity * time * time + yv * time;//鉛直投げ上げの公式(画面内でジャンプするようにいじった)
            time += 0.1;
            count_jump += 0.1;
            render();
        }

    }

    function move_animation_left(){
        if (robot.position.x > width/20 || kk.position.x > width/10) {// 止まる処理
            count_move = 0;
            flag_move = 0;
        }
        else if (flag_move == 1) {// 動く処理
            let requestId = requestAnimationFrame(move_animation_left);

            robot.position.x += 0.1;
            kk.position.x += 0.1;
            count_move += 0.1;
            render();
        }
    }

    function move_animation_right(){
        if (robot.position.x < -width/20 || kk.position.x < -width/10) {// 止まる処理
            count_move = 0;
            flag_move = 0;
        }
        else if (flag_move == 1) {// 動く処理
            let requestId = requestAnimationFrame(move_animation_right);
            robot.position.x -= 0.1;
            kk.position.x -= 0.1;
            count_move += 0.1;
            render();
        }
    }

    function move_animation_size(){
        if (count_size >= 30) {// 止まる処理
            count_size = 0;
            flag_size = 0;
        }
        else if (flag_size == 1) {// 小さくなる処理
            let requestId = requestAnimationFrame(move_animation_size);
            robot.position.z -= 0.5;
            count_size += 0.1;
            render();
        }
        else if (flag_size == 2) {// 大きくなる処理
            let requestId = requestAnimationFrame(move_animation_size);
            robot.position.z += 0.5;
            count_size += 0.1;
            render();
        }
    }

    function ring_animation(){

        if (flag_ring == 1) {
            let requestId = requestAnimationFrame(ring_animation);
            ring.rotation.x += 0.1;
            // ring.rotation.y += 0.5;
            ring.position.x += 0.4;
            ring.position.y += 0.2;
            count_ring += 0.1;
            render();
        }
        
    }

    function stop_animation(){
        // let requestId = requestAnimationFrame(stop_animation);
            robot.position.x = position_x;// 元の位置に戻す
            robot.position.y = position_y;// 元の位置に戻す
            robot.position.z = position_z;// 元の位置に戻す

            kk.position.x = position_kx;// 元の位置に戻す
            kk.position.y = position_ky;// 元の位置に戻す
            kk.position.z = position_kz;// 元の位置に戻す

            // // ring.rotation = ring_rotate;
            // if(ring.rotation.x > 0){
            //    ring.rotation.x -= 0.1; 
            // }

        render();
    }


    //円のサイズ半径
    const circleSize = 10;
    // 角度
    let angleRad = 0;

    function ball_animation(){
        // console.log("あいう");

        if(flag_ball == 1){ // zが押された時の処理
            if(0 <= angleRad < 90 && 180 <= angleRad < 360){
                bx = Math.sin(angleRad)*circleSize;//円周上のX
                by = Math.cos(angleRad)*circleSize;//円周上のY

                B1.position.set(by,by,bx);
                angleRad += 0.1;
            }
            else if(angleRad == 90){
                console.log("!");
                bx += 0.01;
                by += 0;
            }

            
        }
        else if(by < 0){ //stopしたときにy座標が負だとこの処理に入る
            console.log("#");
            bx += 0.01;
            by += 0;

            B1.position.set(0,by,bx);
            angleRad += 0.01;
            if(angleRad = 360){
                angleRad = 0;
            }

        }


        let requestId = requestAnimationFrame(ball_animation);

        render();

    }

    function omp_animation() {
        if (flag_omp == 1) {// 動く処理
            let requestId = requestAnimationFrame(omp_animation);
            tone.rotation.y += 0.1;


            // tone.material.color.set(0xff5555);
            flag_omp == 2;

            render();

        }
        // if (flag_omp == 2) {// 動く処理
        //     let requestId = requestAnimationFrame(omp_animation);
        //     tone.rotation.y += 0.1;


        //     tone.material.color.set(0xffaa55);
        //     flag_omp++;

        // }
        // if (flag_omp == 3) {// 動く処理
        //     let requestId = requestAnimationFrame(omp_animation);
        //     tone.rotation.y += 0.1;


        //     tone.material.color.set(0xffff55);
        //     flag_omp++;

        // }
        // if (flag_omp == 4) {// 動く処理
        //     let requestId = requestAnimationFrame(omp_animation);
        //     tone.rotation.y += 0.1;


        //     tone.material.color.set(0xaaff55);
        //     flag_omp++;

        // }
        // if (flag_omp == 5) {// 動く処理
        //     let requestId = requestAnimationFrame(omp_animation);
        //     tone.rotation.y += 0.1;


        //     tone.material.color.set(0x55ff55);
        //     flag_omp++;

        // }

        render();
    }

    // 初回実行
    let render = function () { renderer.render(scene, camera); };
    render();


    //光源設定

    // 平行光源 
    const directionalLight = new THREE.DirectionalLight(0xffffff,2); 
    directionalLight.position.set(0, 1000, 0); 
    // シーンに追加 
    scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0xffffff,1.5);
    scene.add(ambientLight);


    // 初回実行 
    renderer.render(scene, camera); 
}

