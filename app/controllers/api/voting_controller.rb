class Api::VotingController < ApplicationController
	def irv
		votes = []
		params[:votes].each do |arr|
			votes.push(arr[1])
		end
		if check_for_win(votes)
			render json: check_for_win(votes)
		end
	end

	private

	def check_for_win(votes)
		mid_point = votes.length/2
		first_votes = votes.map { |arr| arr[0] }
		counts = Hash.new 0
		first_votes.each do |vote|
			counts[vote] += 1
		end
		counts.sort_by(|candidate, votes| votes)
		return counts.first[0] if counts.first[1] > mid_point
		return false
	end
end
