package pieritz.prince.CRM.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class RecurringInvoice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int invoiceNumber;
    private int frequency;
    private String status;
    private Date nextIssueDate;
    private double amount;

    @OneToOne(cascade = CascadeType.ALL)
    private Customer customer;

}

