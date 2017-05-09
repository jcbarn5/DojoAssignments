class BankAccount
  attr_reader :account_number, :checking, :saving

  @@bank_accounts = 0

  def initialize
    @account_number = create_account
    @checking = 0
    @saving = 0
    @@bank_accounts += 1
    @interest_rate = 0.01
  end

  def deposit(account, amount)
    if account.downcase == "checking"
      @checking += amount
      self
    else
      @saving += amount
      self
    end
  end

  def withdral(account, amount)
    if account.downcase == "checking"
      if @checking - amount < 0
        puts "Not enough funds, you have #{@checking} in this account"
      else
        @checking -= amount
      end
    else
      if @saving - amount < 0
        puts "Not enough funds, you have #{@saving} in this account"
      else
        @saving -= amount
      end
    end
  end

  def balance
    p "Checking Balance: #{@checking}"
    p "Savings Balance: #{@saving}"
    p "Total Balance: #{@checking + @saving}"
  end

  def account_information
    p "Account Number: #{@account_number}"
    p "Interest Rate: #{@interest_rate}"
    p "#{self.balance}"
  end

  def self.number_of_accounts
    @@bank_accounts
  end

  private
    def create_account
      Array.new(10).map { rand(1..9) }.join
    end
end

my_account = BankAccount.new
my_account.deposit('checking', 100).deposit('saving', 100)
my_account.withdral('checking', 50)
my_account.account_information
