document.addEventListener('DOMContentLoaded', () => {
    // Example of form validation for the create/edit post forms
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (event) => {
            const title = document.querySelector('input[name="title"]').value.trim();
            const content = document.querySelector('textarea[name="content"]').value.trim();
            
            if (!title || !content) {
                event.preventDefault();
                alert('Title and content cannot be empty');
            }
        });
    }

    // Example of confirming before deletion
    const deleteForms = document.querySelectorAll('form[action$="/delete"]');
    deleteForms.forEach(form => {
        form.addEventListener('submit', (event) => {
            if (!confirm('Are you sure you want to delete this post?')) {
                event.preventDefault();
            }
        });
    });
});
