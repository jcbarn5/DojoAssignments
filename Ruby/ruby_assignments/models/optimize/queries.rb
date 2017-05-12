players = Player.all
players.each do |player|
  team = player.team
  puts "Player: #{player.name}, Team: #{team.name}, Mascot: #{team.mascot}, Stadium: #{team.stadium}"
end

players = Player.includes(:team)
players.each do |player|
  team = player.team
  puts "Player: #{player.name}, Team: #{team.name}, Mascot: #{team.mascot}, Stadium: #{team.stadium}"
end

Player.includes(:team).where("teams.name = 'Chicago Bulls'").references(:team)

Player.joins(:team).where("teams.stadium = 'Staples Center'").select('players.*', 'teams.name as team_name', 'teams.stadium as stadium')


Team.includes(:players).where("players.name LIKE 'Z%'").references(:players)















#break
