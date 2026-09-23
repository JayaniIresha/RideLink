package com.ridelink.farepayment.controller;

import com.ridelink.farepayment.model.Receipt;
import com.ridelink.farepayment.model.Payment;
import com.ridelink.farepayment.service.PaymentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/payments")
public class PaymentController {

    private final PaymentService paymentService;

    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @PostMapping
    public ResponseEntity<Payment> createPayment(
            @RequestParam String rideId,
            @RequestParam double amount,
            @RequestParam String paymentMethod) {

                if (rideId == null || rideId.isBlank()) {
                    return ResponseEntity.badRequest().build();
                }
                
                if (amount <= 0) {
                    return ResponseEntity.badRequest().build();
                }
                
                if (paymentMethod == null || paymentMethod.isBlank()) {
                    return ResponseEntity.badRequest().build();
                }

        Payment payment = paymentService.createPayment(
                rideId,
                amount,
                paymentMethod
        );

        return ResponseEntity.ok(payment);
    }

    @PutMapping("/{paymentId}/status")
    public ResponseEntity<Payment> updatePaymentStatus(
            @PathVariable String paymentId,
            @RequestParam String status) {
    
        if (paymentId == null || paymentId.isBlank()) {
            return ResponseEntity.badRequest().build();
        }
    
        if (status == null || status.isBlank()) {
            return ResponseEntity.badRequest().build();
        }
    
        if (!status.equals("PENDING")
                && !status.equals("COMPLETED")
                && !status.equals("FAILED")) {
            return ResponseEntity.badRequest().build();
        }
    
        Payment payment = paymentService.updatePaymentStatus(
                paymentId,
                status
        );
    
        return ResponseEntity.ok(payment);
    }
    @GetMapping("/{paymentId}/receipt")
public ResponseEntity<Receipt> getPaymentReceipt(
        @PathVariable String paymentId) {

    if (paymentId == null || paymentId.isBlank()) {
        return ResponseEntity.badRequest().build();
    }

    Receipt receipt = paymentService.generateReceipt(paymentId);

    return ResponseEntity.ok(receipt);
}
}