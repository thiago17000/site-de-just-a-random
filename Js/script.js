document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Determine the greeting based on the user's local time
    const currentHour = new Date().getHours();
    let greeting = "Welcome, Traveler!";
    
    if (currentHour < 12) {
        greeting = "Good morning! Welcome to the portal.";
    } else if (currentHour < 18) {
        greeting = "Good afternoon! Thanks for stopping by.";
    } else {
        greeting = "Good evening! Welcome to the night hub.";
    }

    // 2. Create and style the greeting banner
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
    
    // Smooth transition setup for fading out
    greetingBanner.style.transition = "opacity 1s ease, transform 1s ease";
    greetingBanner.style.opacity = "1";

    // 3. Inject it at the very top of your page body
    document.body.insertBefore(greetingBanner, document.body.firstChild);
    
    // 4. The 10-second timer
    setTimeout(() => {
        // Start the fade out and slightly slide it up
        greetingBanner.style.opacity = "0";
        greetingBanner.style.transform = "translateY(-20px)";
        
        // Wait 1 second for the fade animation to finish, then completely remove it
        setTimeout(() => {
            greetingBanner.remove();
        }, 1000);

    }, 5000); 

    // ==========================================
    // 2. CUSTOM CURSOR CREATION (Sits invisible for now)
    // ==========================================
    const customCursor = document.createElement("div");
    customCursor.style.width = "20px";
    customCursor.style.height = "20px";
    customCursor.style.border = "2px solid #ff3333";
    customCursor.style.borderRadius = "50px";
    customCursor.style.position = "fixed";
    customCursor.style.transform = "translate(-50%, -50%)";
    customCursor.style.pointerEvents = "none"; // Keeps it from blocking clicks
    customCursor.style.zIndex = "9999";
    customCursor.style.boxShadow = "0 0 8px #ff3333";
    customCursor.style.display = "none"; // Hidden by default
    
    // FUTURE UPGRADE: When you find an image cursor you like, 
    // remove the comment below and add the URL link:
    // customCursor.style.backgroundImage = "url('YOUR_IMAGE_URL_HERE')";
    // customCursor.style.backgroundSize = "contain";

    document.body.appendChild(customCursor);

    // Track mouse movement to slide the circle around
    window.addEventListener("mousemove", (e) => {
        customCursor.style.left = e.clientX + "px";
        customCursor.style.top = e.clientY + "px";
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

    // Build the checkbox layout inside the box
    controlBox.innerHTML = `
        <label style="cursor: pointer;">
            <input type="checkbox" id="cursorToggle" style="margin-right: 8px;"> 
            Custom Cursor
        </label>
    `;

    // Drop the toggle control panel right into the page body
    document.body.insertBefore(controlBox, document.body.firstChild);

    // Listen for the user clicking the checkbox
    const checkbox = document.getElementById("cursorToggle");
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            customCursor.style.display = "block";  // Turn custom cursor ON
            document.body.style.cursor = "none";  // Hide the default mouse pointer
        } else {
            customCursor.style.display = "none";   // Turn custom cursor OFF
            document.body.style.cursor = "default"; // Bring back default pointer
        }
    });
});
