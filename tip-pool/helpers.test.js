describe("Helper test (with setup and tear-down)", function(){
    beforeEach(function () {
    billAmtInput.value = 100;
    tipAmtInput.value = 20;    
    });

    it('should accept key values of allPayments objects and return sum', function(){
        submitPaymentInfo();
        expect(sumPaymentTotal('billAmt')).toEqual(100);
        expect(sumPaymentTotal('tipAmt')).toEqual(20);
    })
    it('should calculate the tip in percentage format', function(){
        expect(calculateTipPercent(100, 20)).toEqual(20);
    })
    it('should add table row element, append a newly created td with values', function(){
        expect(paymentTbody.childElementCount).toEqual(Object.keys(allPayments).length);
    })

    describe("appendDeleteBtn() Test", function(){
        it('should add a table data element to the row', function(){
            submitPaymentInfo()
            expect(paymentTbody.firstChild.childElementCount).toEqual(4)
        })
        it('should remove the element once the element is clicked', function(){
            submitPaymentInfo();
            paymentTbody.firstChild.lastChild.click();
            expect(paymentTbody.childElementCount).toEqual(0)
        })
        it('should remove payment form allpayments when starting creating one payment with the test.',function(){
            submitPaymentInfo();
            paymentTbody.firstChild.lastChild.click();
            expect(Object.keys(allPayments).length).toEqual(0);
        })
    })

    afterEach(function(){
        paymentTbody.innerHTML = ''
        allPayments ={}
        paymentId = 0
    })



})