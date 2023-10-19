describe('createCurPayment() test when billAmt is equal to 0 or a negative.', function(){
    it('should return undefined or empty inputs', function(){
        const possibleValue = [0 -1]
        for(let i = 0; i< possibleValue.length; i++){
            billAmtInput.value = possibleValue[i]
            expect(createCurPayment()).toBeFalsy();
            billAmtInput.value=''
            tipAmtInput.value = ''
        }
        
    })   
})


describe('submitPaymentInfo() test', function(){
    beforeEach(function(){
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
       
    });

    it('should create and add curPayment object to allPayments, update html and reset input values', function(){
        expect(Object.keys(allPayments).length).toEqual(1);
    });

    it('should reset input values and update HTML', function(){
        expect(billAmtInput.value).toEqual('');
        expect(tipAmtInput.value).toEqual('');
    });

    it('should return curPayment Object after calling createCurPayment()',function(){
        expect(allPayments.payment1).toEqual({billAmt:'100', tipAmt:'20', tipPercent:20});
    })

    describe('updateSummary() test', function(){
        it('should render table row elements with sum of all payments', function(){
            expect(parseInt(summaryTds[0].innerHTML.split('').slice(1).join(''))).toEqual(sumPaymentTotal('billAmt'));
            expect(parseInt(summaryTds[1].innerHTML.split('').slice(1).join(''))).toEqual(sumPaymentTotal('tipAmt'));
            expect(parseInt(summaryTds[2].innerHTML)).toEqual(sumPaymentTotal('tipPercent')/Object.keys(allPayments).length)

        })
    })
})

afterEach(function(){
    paymentTbody.innerHTML = '';
    allPayments ={};
    paymentId = 0;
})

afterAll(function(){
    summaryTds[0].innerHTML = '$' +0;
    summaryTds[1].innerHTML = '$' + 0;
    summaryTds[2].innerHTML =  0+'%';
})