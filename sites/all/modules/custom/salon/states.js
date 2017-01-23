(function($){
    $(document).ready(function(){
        check_pay_type($('input[name=field_pay_format\\[und\\]]:checked'))

        $('input[name=field_pay_format\\[und\\]]').change(function (){
            check_pay_type($(this))
            check_pay_format($('input[name=field_pay_type\\[und\\]]:checked'))
        })

        check_pay_format($('input[name=field_pay_type\\[und\\]]:checked'))

        $('input[name=field_pay_type\\[und\\]]').change(function (){
            check_pay_format($(this))
        })

        $('#edit-field-shared-und').change(function (){
            if($(this).is(':checked')){
                $('.field-name-field-clearing-address').show()
            }
            else{
                $('#edit-field-clearing-address-und').val('_none')
                $('.field-name-field-clearing-address').hide()
            }
        })
        $('#edit-field-shared-und').trigger('change')
    })

    function check_pay_type($node) {
        $perekidka_local = $('label[for="edit-field-pay-type-und-85"]')
        $perekidka_dev = $('label[for="edit-field-pay-type-und-111"]')
        $rashod = $('label[for="edit-field-pay-type-und-32"]')

        if ($node.val() != '30' && $node.val() != '33') {
            $perekidka_local.hide().parent().hide()
            $perekidka_local.children('input').removeAttr('checked')

            $perekidka_dev.hide().parent().hide()
            $perekidka_dev.children('input').removeAttr('checked')

            $rashod.hide().parent().hide()
            $rashod.children('input').removeAttr('checked')
        }
        else {
            $perekidka_local.show().parent().show()
            $perekidka_dev.show().parent().show()
            $rashod.show().parent().show()
        }
    }
    function check_pay_format($node) {
        $perekidka_address = $('.field-name-field-perekidka-balance')
        if ($node.val() != '85' && $node.val() != '111'/* && $node.val() != '32'*/) {

            $perekidka_address.hide()
            $('#edit-field-perekidka-balance-und').val('_none')
            $('.autocomplete-deluxe-container').show()
            if ($node.val() == '32' &&  $('input[name=field_pay_format\\[und\\]]').val() == '30') {
                $('#edit-field-shared').show()
            }
            else {
                $('#edit-field-shared-und').removeAttr('checked')
                $('#edit-field-shared-und').trigger('change')
                $('#edit-field-shared').hide()
            }

        }
        else {
            if ($node.val() == '32') {
                $('label[for="edit-field-perekidka-balance-und"]').text('Адрес безнала')
            }
            else {
                $('#edit-field-clearing-address').hide()
            }

            $('.autocomplete-deluxe-container').hide()
            $perekidka_address.show()
        }
    }
})(jQuery);
