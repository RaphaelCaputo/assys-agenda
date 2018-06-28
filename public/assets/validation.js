$(function () {

    $('form').each(function() {
        $(this).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 5
                },
                lastName: {
                    required: true,
                    minlength: 5
                },
                cpf: {
                    required: true,
                    minlength: 14
                },
                role: {
                    required: true,
                    minlength: 3
                },
                birthDate: {
                    required: true,
                    minlength: 10
                },
                email: {
                    required: true,
                    minlength: 5,
                    email: true
                },
                phone: {
                    required: true,
                    minlength: 9
                },
                cellPhone: {
                    required: true,
                    minlength: 9
                }
            },
            messages: {
                name: {
                    required: 'Name is required'
                },
                lastName: {
                    required: 'Last Name is required'
                },
                cpf: {
                    required: 'CPF is required',
                    minlength: 'Please enter at least 11 characters.'
                },
                role: {
                    required: 'Role is required'
                },
                birthDate: {
                    required: 'Birth Date is required'
                },
                email: {
                    required: 'Email is required'
                },
                phone: {
                    required: 'Phone is required'
                },
                cellPhone: {
                    required: 'CellPhone is required'
                },
            }
        });
    });
});