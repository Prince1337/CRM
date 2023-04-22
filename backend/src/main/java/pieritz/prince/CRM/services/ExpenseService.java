package pieritz.prince.CRM.services;

import pieritz.prince.CRM.domain.Expense;

import java.util.List;

public interface ExpenseService {
    public List<Expense> getAllExpenses();

    public Expense saveExpense(Expense expense);

    public Expense updateExpense(Expense expense);

    public void deleteExpense(Long id);
}
