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

    }, 10000); 
});
