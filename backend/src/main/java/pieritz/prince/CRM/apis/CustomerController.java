package pieritz.prince.CRM.apis;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import pieritz.prince.CRM.domain.Customer;
import pieritz.prince.CRM.services.CustomerService;

@Controller
@RequestMapping("/customers")
public class CustomerController {
    private CustomerService customerService;

    @Autowired
    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @PostMapping("")
    @ResponseBody
    public Customer createCustomer(@RequestBody Customer customer) {
        return customerService.createCustomer(customer);
    }


    @PutMapping("/{id}")
    @ResponseBody
    public Customer updateCustomer(@PathVariable Long id, @RequestBody Customer customer) {
        return customerService.updateCustomer(id, customer);
    }

    @DeleteMapping("/{id}")
    public void deleteCustomer(@PathVariable Long id) {
        customerService.deleteCustomer(id);
    }
}
