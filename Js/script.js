document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // GLOBAL MODAL INITIALIZATION
    // (Declared first so both sections can safely see them)
    // ==========================================
    const gameModal = document.getElementById("gameModal");
    const game2Modal = document.getElementById("game2Modal");

    // ==========================================
    // 1. TIMED GREETING BANNER
    // ==========================================
    const currentHour = new Date().getHours();
    let greeting = "Welcome, Traveler!";
    
    if (currentHour < 12) {
        greeting = "Good morning! Welcome to the portal.";
    } else if (currentHour < 18) {
        greeting = "Good afternoon! Thanks for stopping by.";
    } else {
        greeting = "Good evening! Welcome to the night hub.";
    }

    const greetingBanner = document.createElement("div");
    greetingBanner.innerText = greeting;
    greetingBanner.style.background = "#1a1a1a";
    greetingBanner.style.color = "#ff3333"; 
    greetingBanner.style.padding = "15px";
    greetingBanner.style.margin = "20px auto";
    greetingBanner.style.borderRadius = "8px";
    greetingBanner.style.textAlign = "center";
    greetingBanner.style.fontWeight = "bold";
    greetingBanner.style.border = "1px solid #ff3333";
    greetingBanner.style.boxShadow = "0 0 10px rgba(255, 51, 51, 0.5)";
    greetingBanner.style.maxWidth = "600px";
    greetingBanner.style.transition = "opacity 1s ease, transform 1s ease";
    greetingBanner.style.opacity = "1";

    document.body.insertBefore(greetingBanner, document.body.firstChild);
    
    // Hide and remove the banner after 5 seconds
    setTimeout(() => {
        greetingBanner.style.opacity = "0";
        greetingBanner.style.transform = "translateY(-20px)";
        
        setTimeout(() => {
            greetingBanner.remove();
        }, 1000);
    }, 5000); 

    // ==========================================
    // 2. CUSTOM CURSOR SETUP & TRACKING
    // ==========================================
    const customCursor = document.createElement("div");
    customCursor.style.width = "20px";
    customCursor.style.height = "20px";
    customCursor.style.borderRadius = "50px";
    customCursor.style.position = "fixed";
    customCursor.style.transform = "translate(-50%, -50%)";
    customCursor.style.pointerEvents = "none"; 
    customCursor.style.zIndex = "9999";
    customCursor.style.display = "none"; 
    
    customCursor.style.backgroundImage = "url('images/vitoria.gif')"; 
    customCursor.style.backgroundSize = "contain";
    customCursor.style.backgroundRepeat = "no-repeat";

    document.body.appendChild(customCursor);

    // Dynamic mouse tracker & dynamic image swapper
    window.addEventListener("mousemove", (e) => {
        customCursor.style.left = e.clientX + "px";
        customCursor.style.top = e.clientY + "px";

        const hoveringClickable = e.target.closest("a, button, label, input[type='checkbox']");

        if (hoveringClickable) {
            customCursor.style.backgroundImage = "url('images/reimu-dance.gif')"; 
        } else {
            customCursor.style.backgroundImage = "url('images/vitoria.gif')"; 
        }
    });

    // ==========================================
    // 3. THE TOGGLE CONTROLLER BOX
    // ==========================================
    const controlBox = document.createElement("div");
    controlBox.style.background = "#111";
    controlBox.style.border = "1px solid #333";
    controlBox.style.padding = "10px";
    controlBox.style.margin = "10px auto";
    controlBox.style.maxWidth = "200px";
    controlBox.style.textAlign = "center";
    controlBox.style.borderRadius = "5px";
    controlBox.style.color = "#fff";
    controlBox.style.fontSize = "14px";

    controlBox.innerHTML = `
        <label style="cursor: pointer;">
            <input type="checkbox" id="cursorToggle" style="margin-right: 8px;"> 
            Custom Cursor
        </label>
    `;

    document.body.appendChild(controlBox);

    const checkbox = document.getElementById("cursorToggle");
    if (checkbox) {
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                customCursor.style.display = "block";  
                document.body.style.cursor = "none";  
            } else {
                customCursor.style.display = "none";   
                document.body.style.cursor = "default"; 
            }
        });
    }

    // ==========================================
    // 4. VISUAL NOVEL POP-UP OVERLAY SYSTEM
    // ==========================================
    const launchGameBtn = document.getElementById("launchGameBtn");
    const closeGameBtn = document.getElementById("closeGameBtn");

    if (launchGameBtn && gameModal) {
        launchGameBtn.addEventListener("click", () => {
            if (game2Modal) game2Modal.style.display = "none"; 
            gameModal.style.display = "flex";
        });
    }

    if (closeGameBtn && gameModal) {
        closeGameBtn.addEventListener("click", () => {
            gameModal.style.display = "none";
            
            const iframe = gameModal.querySelector("iframe");
            if (iframe) {
                const currentSrc = iframe.src;
                iframe.src = currentSrc;
            }
        });
    }

    // ==========================================
    // 5. RPG MARISA JOURNEY POP-UP SYSTEM
    // ==========================================
    const launchGame2Btn = document.getElementById("launchGame2Btn");
    const closeGame2Btn = document.getElementById("closeGame2Btn");

    if (launchGame2Btn && game2Modal) {
        launchGame2Btn.addEventListener("click", () => {
            if (gameModal) gameModal.style.display = "none"; 
            game2Modal.style.display = "flex";
        });
    }

    if (closeGame2Btn && game2Modal) {
        closeGame2Btn.addEventListener("click", () => {
            game2Modal.style.display = "none";
            
            const iframe = game2Modal.querySelector("iframe");
            if (iframe) {
                const currentSrc = iframe.src;
                iframe.src = currentSrc;
            }
        });
    }

});
