Tailwind CSS crashcourse

@learning @crucial
1. HOW TO APPL DARK/LIGHT THEMES:

    1. In tailwind.config.js, add the darkMode option and set it to 'class'.
     This tells Tailwind to enable dark mode by adding a dark class to the root HTML element or any specific container.

            /** @type {import('tailwindcss').Config} */
            export default {
            darkMode: 'class',
            theme: {
                extend: {
                colors: {
                    chestnut: '#973f29',
                },
                },
            },
            plugins: [],
            }
    2. Set Up HTML with Tailwind Dark Mode Support:
    In the HTML, use the dark class to apply different styles for dark mode. 
    3. Implement JavaScript for Theme Switching:
    To toggle between dark and light themes, you need to add a small JavaScript function that listens for clicks on a button and toggles the dark class on the document.documentElement (the <html> element). This approach works across frameworks but is especially common in vanilla JS or frameworks like React.
    4. React Approach (alternative to 3)
    In a React project, the dark mode toggle would typically be managed with a state.

@learning
2. CUSTOMIZATION:
    1. If predefined utility classes are not enough, eg we want to use a custom color:
    in tailwind.config.jss extned the theme and add color, see chestnut in example below


@learning @crucial
2. REUSABILITY IN TAILWIND CSS:
    1. Break down things into components like CustomButton, CustomInput, etc.
    2. Use directives in Tailwind CSS: 
    Tailwind has three built-in layers: base, components, and utilities.
    Using @layer components for Reusability: The @layer components directive is typically used to define reusable components. By defining components inside this layer, you make sure your custom components are available globally and can be reused throughout your project. 
    See example `card` and `special-button` below
    3. use componetn libraries, e.g.
        1. Shadcn
        2. tailwind ui
        3. headless ui





EXAMPLE CODE:

---- HTML

<div class="card">
  <h3 class="text-base font-medium tracking-tight text-slate-900 dark:text-white">This is a text element.</h3>
  <p class="mt-2 text-small text-slate-500 dark:text-blue-100">This is an even longer p tag element.</p>

  <button id="toggleDark" class="special-button" onClick=document.body.classList.toggle('dark')>Toggle Dark Mode</button>

  <p class="text-2xl text-chestnut bg-stone-100 p-2 mt-4 ">Chestnut color</p>
</div>

// this is usually done with React states
<script type="text/javascript">
  document.addEventListener("DOMContentLoaded", () => {
    const toggleDark = document.getElementById('toggleDark')
    toggleDark.addEventListener('click', function() {
      if(document.documentElement.classList.includes('dark')) {
        document.documentElement.classList.remove('dark')
      }
      else {
        document.documentElement.classList.add('dark')
      }
      alert("click!")
    });
  });
</script>


---- TAILWIND CONFIG

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        chestnut: '#973f29',
      },
    },
  },
  plugins: [],
}


---- CSS

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .card {
    @apply m-10 rounded-lg bg-white px-6 py-8 shadow-xl ring-1 ring-slate-900/5 dark:bg-black;
  }
  .special-button {
    @apply mt-8 rounded-md bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900;
  }
}






