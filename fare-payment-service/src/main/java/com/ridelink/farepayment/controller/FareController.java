package com.ridelink.farepayment.controller;

import com.ridelink.farepayment.model.Fare;
import com.ridelink.farepayment.service.FareService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/fares")
public class FareController {

    private final FareService fareService;

    public FareController(FareService fareService) {
        this.fareService = fareService;
    }

    @PostMapping("/estimate")
    public ResponseEntity<Fare> estimateFare(
            @RequestParam String rideId,
            @RequestParam double distance) {

        if (rideId == null || rideId.isBlank()) {
            return ResponseEntity.badRequest().build();
        }

        if (distance <= 0) {
            return ResponseEntity.badRequest().build();
        }

        Fare fare = fareService.estimateFare(rideId, distance);

        return ResponseEntity.ok(fare);
    }

    @PostMapping("/final")
    public ResponseEntity<Fare> calculateFinalFare(
            @RequestParam String rideId,
            @RequestParam double distance) {

        if (rideId == null || rideId.isBlank()) {
            return ResponseEntity.badRequest().build();
        }

        if (distance <= 0) {
            return ResponseEntity.badRequest().build();
        }

        Fare fare = fareService.calculateFinalFare(rideId, distance);

        return ResponseEntity.ok(fare);
    }

    
}