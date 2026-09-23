package com.ridelink.farepayment.service;

import com.ridelink.farepayment.exception.PaymentNotFoundException;
import com.ridelink.farepayment.model.Payment;
import com.ridelink.farepayment.model.Receipt;
import com.ridelink.farepayment.repository.PaymentRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class PaymentService {

    private final PaymentRepository paymentRepository;

    public PaymentService(PaymentRepository paymentRepository) {
        this.paymentRepository = paymentRepository;
    }

    public Payment createPayment(
            String rideId,
            double amount,
            String paymentMethod) {

        Payment payment = new Payment();

        payment.setRideId(rideId);
        payment.setAmount(amount);
        payment.setPaymentMethod(paymentMethod);
        payment.setStatus("PENDING");
        payment.setPaymentDate(LocalDateTime.now().toString());

        return paymentRepository.save(payment);
    }

    public Payment updatePaymentStatus(
            String paymentId,
            String status) {

        Payment payment = paymentRepository
                .findById(paymentId)
                .orElseThrow(() ->
                        new PaymentNotFoundException("Payment not found"));

        payment.setStatus(status);

        return paymentRepository.save(payment);
    }

    public Payment getPayment(String paymentId) {

        return paymentRepository
                .findById(paymentId)
                .orElseThrow(() ->
                        new PaymentNotFoundException("Payment not found"));
    }

    public Receipt generateReceipt(String paymentId) {

        Payment payment = paymentRepository
                .findById(paymentId)
                .orElseThrow(() ->
                        new PaymentNotFoundException("Payment not found"));

        Receipt receipt = new Receipt();

        receipt.setReceiptId("REC-" + payment.getId());
        receipt.setPaymentId(payment.getId());
        receipt.setRideId(payment.getRideId());
        receipt.setAmount(payment.getAmount());
        receipt.setPaymentMethod(payment.getPaymentMethod());
        receipt.setPaymentStatus(payment.getStatus());
        receipt.setPaymentDate(payment.getPaymentDate());

        return receipt;
    }
}