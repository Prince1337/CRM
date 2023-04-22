package pieritz.prince.CRM.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Table(name = "report_data")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReportData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "hours")
    private Integer hours;

    @Column(name = "amount")
    private Integer amount;

    @Column(name = "created_at")
    private Date createdAt;

}

