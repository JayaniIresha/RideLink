package com.ridelink.farepayment.service;

import com.ridelink.farepayment.model.Fare;
import com.ridelink.farepayment.repository.FareRepository;
import org.springframework.stereotype.Service;

@Service
public class FareService {

    private final FareRepository fareRepository;

    private static final double BASE_FARE = 200.0;
    private static final double RATE_PER_KM = 100.0;

    public FareService(FareRepository fareRepository) {
        this.fareRepository = fareRepository;
    }

    public Fare estimateFare(String rideId, double distance) {

        double totalFare = BASE_FARE + (distance * RATE_PER_KM);

        Fare fare = new Fare();
        fare.setRideId(rideId);
        fare.setDistance(distance);
        fare.setBaseFare(BASE_FARE);
        fare.setRatePerKm(RATE_PER_KM);
        fare.setTotalFare(totalFare);

        return fareRepository.save(fare);
    }

    public Fare calculateFinalFare(String rideId, double distance) {

        double totalFare = BASE_FARE + (distance * RATE_PER_KM);

        Fare fare = new Fare();
        fare.setRideId(rideId);
        fare.setDistance(distance);
        fare.setBaseFare(BASE_FARE);
        fare.setRatePerKm(RATE_PER_KM);
        fare.setTotalFare(totalFare);

        return fareRepository.save(fare);
    }

    
}