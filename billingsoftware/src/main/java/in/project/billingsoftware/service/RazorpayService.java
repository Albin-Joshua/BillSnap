package in.project.billingsoftware.service;

import com.razorpay.RazorpayException;
import in.project.billingsoftware.io.RazorpayOrderResponse;

public interface RazorpayService {

    RazorpayOrderResponse createOrder(Double amount, String currency) throws RazorpayException;
}
