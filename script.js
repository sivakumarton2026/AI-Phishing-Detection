function checkPhishing() {
    const urlElement = document.getElementById("urlInput");
    const resultElement = document.getElementById("result");

    if (!urlElement || !resultElement) {
        console.error("Missing elements: #urlInput or #result not found.");
        return;
    }

    const url = urlElement.value.trim().toLowerCase();

    const suspiciousPatterns = [
        "secure-login",
        "bankoftrust",
        "verify-account",
        "update-info",
        "login-now",
        "account-verification",
        "confirm-details",
        "urgent-login",
        "reset-password",
        "security-alert"
    ];

    const fakeDomains = [
        "example.com",
        "example.org",
        "example.net",
        "test.com",
        "test.org",
        "test.net",
        "placeholder.com",
        "placeholder.site",
        "fakeurl.local",
        "notreal.website",
        "localhost",
        "localtest.me",
        "mytestsite.com",
        "fakesite.com",
        "dummyurl.com",
        "mocksite.com",
        "testdomain.com",
        "invalid.url",
        "fakedomain.com",
        "testing123.com",
        "demo-site.com",
        "staging.example.com",
        "dev.example.com",
        "sandbox.example.com",
        "tempurl.com",
        "null.site",
        "void.example",
        "nowhere.com",
        "nonexistent.site",
        "unreal.website",
        "bogus.com",
        "fakesite.local",
        "testserver.local",
        "devserver.local",
        "login.com",
        "gift.com",
        "rewards.com"
    ];

    const isPhishing = suspiciousPatterns.some(pattern => url.includes(pattern));
    const isFakeUrl = fakeDomains.some(domain => url.includes(domain));

    if (url) {
        if (isPhishing) {
            resultElement.textContent =
                "🛡️ Warning: This URL looks suspicious. Possible phishing attempt!";
            resultElement.style.color = "orange";
        } else if (isFakeUrl) {
            resultElement.textContent = "This is a fake URL.";
            resultElement.style.color = "red";
        } else {
            resultElement.textContent = "✅ This URL seems safe.";
            resultElement.style.color = "green";
        }
    } else {
        resultElement.textContent = "❗ Please enter a URL to check.";
        resultElement.style.color = "orange";
    }
}