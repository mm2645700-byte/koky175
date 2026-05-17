const targetDate = new Date("May 17, 2026 00:00:00").getTime();

function checkTime() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
        if (typeof timerInterval !== 'undefined') clearInterval(timerInterval);
        document.getElementById("countdown-screen").style.display = "none";
        document.getElementById("main-content").style.display = "flex";
        startCakeAnimations();
        return true;
    }
    
    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = d < 10 ? "0"+d : d;
    document.getElementById("hours").innerText = h < 10 ? "0"+h : h;
    document.getElementById("minutes").innerText = m < 10 ? "0"+m : m;
    document.getElementById("seconds").innerText = s < 10 ? "0"+s : s;
    return false;
}

if (!checkTime()) {
    var timerInterval = setInterval(checkTime, 1000);
}

function startCakeAnimations() {
    setTimeout(typeTitle, 4500);
    for (let j = 0; j < 50; j++) {
        let c = document.createElement('div'); 
        c.style.position = 'absolute';
        c.style.top = '-10px';
        c.style.left = Math.random() * 100 + 'vw';
        c.style.width = c.style.height = (Math.random() * 6 + 4) + 'px';
        c.style.backgroundColor = ['#FFC107','#E91E63','#03A9F4','#4CAF50','#FF5722'][Math.floor(Math.random()*5)];
        c.style.borderRadius = '50%';
        c.style.zIndex = '5';
        c.style.animation = `fall ${(Math.random() * 2 + 3)}s linear infinite`;
        c.style.animationDelay = Math.random() * 5 + 's';
        document.body.appendChild(c);
    }
}

const titleText = "A7la Kol Sana W Enty M3aya Ya Banoty";
let ti = 0;
function typeTitle() { 
    if (ti < titleText.length) { 
        document.getElementById("typewriter").innerHTML += titleText.charAt(ti); 
        ti++; 
        setTimeout(typeTitle, 80); 
    } 
}

const myMsg = "كل سنة وأنتي معايا يا روحي.. ❤️\n\nوربنا يخليكي ليا يا أحلى بنوتة في الدنيا كلها،\nويا رب تكون سنة سعيدة عليكي يا عمري\nوتحققي فيها كل اللي بتتمنيه..\n\nوتطلعي أحلى وأشطر دكتورة أسنان في الدنيا يا رب 🦷✨\n\nو يرب تكون سنه سعيده عليكي يكوكي،\nوتبقي من نصيبي باذن الله يروحي ..\n\nأحلى من تم 17 سنة في الدنيااااااا ❤";
let ci = 0; 
let typing = false;
const audio = document.getElementById('music');

function openScroll() {
    audio.play().catch(e => {});
    document.getElementById('letterModal').style.display = 'flex';
    setTimeout(() => {
        document.getElementById('scrollWrapper').classList.add('open');
        if (!typing) setTimeout(startTyping, 1800);
    }, 100);
}

function startTyping() {
    typing = true;
    if (ci < myMsg.length) { 
        document.getElementById("message-text").innerHTML += myMsg.charAt(ci); 
        ci++; 
        setTimeout(startTyping, 50); 
    }
}

function closeScroll() {
    audio.pause();
    audio.currentTime = 0;
    document.getElementById('letterModal').style.display = 'none';
    document.getElementById('scrollWrapper').classList.remove('open');
    document.getElementById("message-text").innerHTML = "";
    ci = 0; 
    typing = false;
}