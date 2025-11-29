from playwright.sync_api import sync_playwright

def verify_frontend():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the main page
        print("Navigating to http://localhost:5173/")
        page.goto("http://localhost:5173/")

        # Check for console errors
        page.on("console", lambda msg: print(f"Console {msg.type}: {msg.text}"))
        page.on("pageerror", lambda err: print(f"Page Error: {err}"))

        # Wait for the page to load
        page.wait_for_load_state("networkidle")

        # Take a screenshot of the main page
        page.screenshot(path="verification/main_page.png")
        print("Screenshot of main page saved.")

        # Navigate to /lojas
        print("Navigating to http://localhost:5173/lojas")
        page.goto("http://localhost:5173/lojas")
        page.wait_for_load_state("networkidle")
        page.screenshot(path="verification/lojas_page.png")
        print("Screenshot of lojas page saved.")

        # Navigate to /cardapio
        print("Navigating to http://localhost:5173/cardapio")
        page.goto("http://localhost:5173/cardapio")
        page.wait_for_load_state("networkidle")
        page.screenshot(path="verification/cardapio_page.png")
        print("Screenshot of cardapio page saved.")

        browser.close()

if __name__ == "__main__":
    verify_frontend()
