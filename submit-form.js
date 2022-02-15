const WEBHOOK_URL = `https://hooks.zapier.com/hooks/catch/8446446/bhowoce/`;

/**
 * Helper function for POSTing data as JSON with fetch.
 *
 * @param {Object} options
 * @param {string} options.url - URL to POST data to
 * @param {FormData} options.formData - `FormData` instance
 * @return {Object} - Response body from URL that was POSTed to
 */
async function postFormDataAsJson({ url, formData }) {
    const plainFormData = Object.fromEntries(formData.entries());

    /* Format payload to match Airtable values */
    if (plainFormData.preference === 'both') {
        plainFormData.preference = 'Work, Not Work';
    } else if (plainFormData.preference === 'work') {
        plainFormData.preference = 'Work';
    } else {
        plainFormData.preference = 'Not Work';
    }

    const formDataJsonString = JSON.stringify(plainFormData);

    const fetchOptions = {
        method: 'POST',
        body: formDataJsonString,
    };

    const response = await fetch(WEBHOOK_URL, fetchOptions);

    if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
    }

    return response.json();
}

/**
 * Event handler for a form submit event.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event
 *
 * @param {SubmitEvent} event
 */
async function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const url = form.action;

    try {
        const formData = new FormData(form);
        const responseData = await postFormDataAsJson({ url, formData });
        console.log({ responseData });
        if (responseData.status === 'success') {
            document
                .getElementsByClassName('grid--subscribe')[0]
                .classList.add('hidden');
            document
                .getElementsByClassName('flex--subscribe-success')[0]
                .classList.remove('hidden');
        }
    } catch (error) {
        console.error(error);
    }
}

const exampleForm = document.getElementById('subscribe-form');
exampleForm.addEventListener('submit', handleFormSubmit);

